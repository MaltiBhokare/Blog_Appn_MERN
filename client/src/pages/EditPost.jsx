// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";

// const EditPost = () => {
//     const { id } = useParams(); // Get post ID from the URL
//     const navigate = useNavigate(); // Initialize navigate
//     const [post, setPost] = useState({ title: "", image: "", description: "" });

//     // Fetch post data when component is mounted
//     useEffect(() => {
//         axios.get(`http://localhost:5000/api/posts/${id}`)
//             .then((response) => setPost(response.data))
//             .catch((error) => console.error("Error fetching post:", error));
//     }, [id]);

//     // Handle form input changes
//     const handleChange = (e) => {
//         setPost({ ...post, [e.target.name]: e.target.value });
//     };

//     // Handle form submit (update post)
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         axios.put(`http://localhost:5000/api/posts/${id}`, post)
//             .then(() => {
//                 navigate("/posts"); // Redirect to posts page after updating
//             })
//             .catch((error) => console.error("Error updating post:", error));
//     };

//     return (
//         <div>
//             <h2>Edit Blog Post</h2>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Title:</label>
//                     <input
//                         type="text"
//                         name="title"
//                         value={post.title}
//                         onChange={handleChange}
//                         placeholder="Title"
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Image URL:</label>
//                     <input
//                         type="text"
//                         name="image"
//                         value={post.image}
//                         onChange={handleChange}
//                         placeholder="Image URL"
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Description:</label>
//                     <textarea
//                         name="description"
//                         value={post.description}
//                         onChange={handleChange}
//                         placeholder="Description"
//                         required
//                     />
//                 </div>
//                 <button type="submit">Update Post</button>
//             </form>
//         </div>
//     );
// };

// export default EditPost;



// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";

// const EditPost = () => {
//     const { id } = useParams(); // Get post ID from the URL
//     const navigate = useNavigate(); // Initialize navigate
//     const [post, setPost] = useState({ title: "", image: "", description: "" });

//     // Fetch post data when component is mounted
//     useEffect(() => {
//         axios.get(`http://localhost:5000/api/posts/${id}`)
//             .then((response) => setPost(response.data))
//             .catch((error) => console.error("Error fetching post:", error));
//     }, [id]);

//     // Handle form input changes
//     const handleChange = (e) => {
//         setPost({ ...post, [e.target.name]: e.target.value });
//     };

//     // Handle form submit (update post)
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         axios.put(`http://localhost:5000/api/posts/${id}`, post)
//             .then(() => {
//                 navigate("/posts"); // Redirect to posts page after updating
//             })
//             .catch((error) => console.error("Error updating post:", error));
//     };

//     return (
//         <div>
//             <h2>Edit Blog Post</h2>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Title:</label>
//                     <input
//                         type="text"
//                         name="title"
//                         value={post.title}
//                         onChange={handleChange}
//                         placeholder="Title"
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Image URL:</label>
//                     <input
//                         type="text"
//                         name="image"
//                         value={post.image}
//                         onChange={handleChange}
//                         placeholder="Image URL"
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Description:</label>
//                     <textarea
//                         name="description"
//                         value={post.description}
//                         onChange={handleChange}
//                         placeholder="Description"
//                         required
//                     />
//                 </div>
//                 <button type="submit">Update Post</button>
//             </form>
//         </div>
//     );
// };

// export default EditPost;



import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./EditPost.css";

const EditPost = () => {
    const { id } = useParams(); // Get post ID from the URL
    const navigate = useNavigate(); // Initialize navigate
    const [post, setPost] = useState({ title: "", image: "", description: "" });

    // Fetch post data when component is mounted
    useEffect(() => {
        axios.get(`https://blog-appn-mern-api.vercel.app/api/posts/${id}`)
            .then((response) => setPost(response.data))
            .catch((error) => console.error("Error fetching post:", error));
    }, [id]);

    // Handle form input changes
    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    };

    // Handle form submit (update post)
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`https://blog-appn-mern-api.vercel.app/api/posts/${id}`, post)
            .then(() => {
                navigate("/posts"); // Redirect to posts page after updating
            })
            .catch((error) => console.error("Error updating post:", error));
    };

    return (
        <div>
            <h2>Edit Blog Post</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={post.title}
                        onChange={handleChange}
                        placeholder="Title"
                        required
                    />
                </div>
                <div>
                    <label>Image URL:</label>
                    <input
                        type="text"
                        name="image"
                        value={post.image}
                        onChange={handleChange}
                        placeholder="Image URL"
                        required
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        name="description"
                        value={post.description}
                        onChange={handleChange}
                        placeholder="Description"
                        required
                    />
                </div>
                <button type="submit">Update Post</button>
            </form>
        </div>
    );
};

export default EditPost;
