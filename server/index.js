
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2;

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
// CORS Configuration
const corsOptions = {
  origin: "https://blog-appn-mern-client.vercel.app", // Your frontend domain
  methods: "GET,POST,PUT,DELETE", // Allow specific HTTP methods
  allowedHeaders: "Content-Type,Authorization", // Allow specific headers
};

app.use(cors(corsOptions));



app.get('/', (req, res) => {
    res.send('Welcome to the API!');
  });


mongoose.connect(process.env.MONGO_URI + "/test")
    .then(() => console.log("Connected to MongoDB 'test' Database"))
    .catch(err => console.error("Error connecting to MongoDB:", err));

// Cloudinary Configuration
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});

// Multer Storage for Cloudinary
const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: "blog_posts",
        allowed_formats: ['jpg', 'png', 'jpeg'],
    },
});
const upload = multer({ storage });

// Blog Post Schema (ensure collection name matches)
const postSchema = new mongoose.Schema({
    title: String,
    image: String,
    description: String
}, { collection: 'posts' });

const Post = mongoose.model('Post', postSchema);

// Create a Blog Post
app.post('/api/posts', upload.single('image'), async (req, res) => {
    try {
        const { title, description } = req.body;

        if (!req.file) {
            return res.status(400).json({ error: "Image is required" });
        }

        const image = req.file.path; // Cloudinary URL
        const newPost = new Post({ title, image, description });
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        console.error("Error saving post:", error);
        res.status(500).json({ error: "Failed to create post", details: error.message });
    }
});

// Fetch All Blog Posts
app.get('/api/posts', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch posts", details: error.message });
    }
});

// Fetch a Single Blog Post by ID
app.get('/api/posts/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ error: "Post not found" });
        }
        res.json(post);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch post", details: error.message });
    }
});

// Update a Blog Post by ID
app.put('/api/posts/:id', upload.single('image'), async (req, res) => {
    try {
        const { title, description } = req.body;
        const updateData = { title, description };

        if (req.file) {
            updateData.image = req.file.path; // Cloudinary URL
        }

        const updatedPost = await Post.findByIdAndUpdate(req.params.id, updateData, { new: true });

        if (!updatedPost) {
            return res.status(404).json({ error: "Post not found" });
        }

        res.json(updatedPost);
    } catch (error) {
        res.status(500).json({ error: "Failed to update post", details: error.message });
    }
});

// Delete a Blog Post by ID
app.delete('/api/posts/:id', async (req, res) => {
    try {
        const deletedPost = await Post.findByIdAndDelete(req.params.id);

        if (!deletedPost) {
            return res.status(404).json({ error: "Post not found" });
        }

        res.json({ message: "Post deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete post", details: error.message });
    }
});



// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
