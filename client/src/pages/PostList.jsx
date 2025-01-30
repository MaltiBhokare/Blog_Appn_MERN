


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./PostList.css"; // Import your custom styles

// const PostList = () => {
//     const [posts, setPosts] = useState([]);

//     // Fetch posts when the component is mounted
//     useEffect(() => {
//         axios.get("http://localhost:5000/api/posts")
//             .then((response) => setPosts(response.data))
//             .catch((error) => console.error("Error fetching posts:", error));
//     }, []);

//     return (
//         <div className="post-list-container">
//             <h2>All Blog Posts</h2>
//             <div className="post-list">
//                 {posts.length === 0 ? (
//                     <p>No blog posts available.</p>
//                 ) : (
//                     posts.map((post) => (
//                         <div key={post._id} className="post-card">
//                             <h3>{post.title}</h3>
//                             {/* Ensure the image is loaded properly */}
//                             <img 
//                                 src={post.image} 
//                                 alt={post.title} 
//                                 className="post-image" 
//                             />
//                             <p>{post.description}</p>
//                         </div>
//                     ))
//                 )}
//             </div>
//         </div>
//     );
// };

// export default PostList;






// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./PostList.css"; // Import your custom styles

// const PostList = () => {
//     const [posts, setPosts] = useState([]);

//     // Fetch posts when the component is mounted
//     useEffect(() => {
//         axios.get("http://localhost:5000/api/posts")
//             .then((response) => setPosts(response.data))
//             .catch((error) => console.error("Error fetching posts:", error));
//     }, []);

//     return (
//         <div className="post-list-container">
//             <h2>All Blog Posts</h2>
//             <div className="post-list">
//                 {posts.length === 0 ? (
//                     <p>No blog posts available.</p>
//                 ) : (
//                     posts.map((post) => (
//                         <div key={post._id} className="post-card">
//                             <h3>{post.title}</h3>
//                             {/* Ensure the image is loaded properly */}
//                             <img 
//                                 src={post.image} 
//                                 alt={post.title} 
//                                 className="post-image" 
//                             />
//                             <p>{post.description}</p>
//                         </div>
//                     ))
//                 )}
//             </div>
//         </div>
//     );
// };

// export default PostList;




// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
// import "./PostList.css"; // Import your custom styles

// const PostList = () => {
//     const [posts, setPosts] = useState([]);
//     const navigate = useNavigate(); // Initialize navigate

//     // Fetch posts when the component is mounted
//     useEffect(() => {
//         axios.get("http://localhost:5000/api/posts")
//             .then((response) => setPosts(response.data))
//             .catch((error) => console.error("Error fetching posts:", error));
//     }, []);

//     // Handle delete post
//     const handleDelete = (id) => {
//         axios.delete(`http://localhost:5000/api/posts/${id}`)
//             .then(() => {
//                 setPosts(posts.filter((post) => post._id !== id)); // Remove the deleted post from the state
//             })
//             .catch((error) => console.error("Error deleting post:", error));
//     };

//     return (
//         <div className="post-list-container">
//             <h2>All Blog Posts</h2>
//             <div className="post-list">
//                 {posts.length === 0 ? (
//                     <p>No blog posts available.</p>
//                 ) : (
//                     posts.map((post) => (
//                         <div key={post._id} className="post-card">
//                             <h3>{post.title}</h3>
//                             {/* Ensure the image is loaded properly */}
//                             <img 
//                                 src={post.image} 
//                                 alt={post.title} 
//                                 className="post-image" 
//                             />
//                             <p>{post.description}</p>
//                             <div className="post-actions">
//                                 {/* Edit button */}
//                                 <button onClick={() => navigate(`/edit/${post._id}`)}>Edit</button>
//                                 {/* Delete button */}
//                                 <button onClick={() => handleDelete(post._id)}>Delete</button>
//                             </div>
//                         </div>
//                     ))
//                 )}
//             </div>
//         </div>
//     );
// };

// export default PostList;


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./PostList.css"; // Import your custom styles

const PostList = () => {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate(); // To navigate to edit page

    // Fetch posts when the component is mounted
    useEffect(() => {
        axios.get("https://blog-appn-mern-api.vercel.app/api/posts")
            .then((response) => setPosts(response.data))
            .catch((error) => console.error("Error fetching posts:", error));
    }, []);

    // Delete post function
    const handleDelete = (id) => {
        axios.delete(`https://blog-appn-mern-api.vercel.app/api/posts/${id}`)
            .then(() => {
                setPosts(posts.filter(post => post._id !== id)); // Remove deleted post from state
            })
            .catch((error) => console.error("Error deleting post:", error));
    };

    return (
        <div className="post-list-container">
            <h2>All Blog Posts</h2>
            <div className="post-list">
                {posts.length === 0 ? (
                    <p>No blog posts available.</p>
                ) : (
                    posts.map((post) => (
                        <div key={post._id} className="post-card">
                            <h3>{post.title}</h3>
                            <img 
                                src={post.image} 
                                alt={post.title} 
                                className="post-image" 
                            />
                            <p>{post.description}</p>

                            {/* Edit button should navigate to the EditPost page */}
                            <button onClick={() => navigate(`/edit-post/${post._id}`)}>Edit</button>

                            {/* Delete button */}
                            <button onClick={() => handleDelete(post._id)}>Delete</button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default PostList;
