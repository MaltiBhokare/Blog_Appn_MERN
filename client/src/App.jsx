


// import React from 'react';
// import { Routes, Route, Link } from 'react-router-dom';
// import AddPost from './pages/AddPost';  // Import AddPost component
// import PostList from './pages/PostList'; // Import PostList component
// import './App.css';  // Assuming global styles are applied here

// const App = () => {
//   return (
//     <div className="app-container">
//       {/* Navbar */}
//       <nav className="navbar">
//         <div className="navbar-logo">
//           {/* Link to PostList Page (Home for Blog) */}
//           <Link to="/posts" className="nav-link">
//             <h1>My Blog</h1>
//           </Link>
//         </div>
//         <div className="navbar-links">
//           {/* Link to AddPost Page */}
//           <Link to="/add-post" className="nav-link">
//             <button className="btn">Add Blog</button>
//           </Link>
//           {/* Link to PostList Page */}
//           <Link to="/posts" className="nav-link">
//             <button className="btn">List Blog</button>
//           </Link>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <div className="main-content">
//         <header className="hero">
//           <div className="hero-content">
//             <h1>Welcome to My Blog</h1>
//             <p>Share your thoughts and ideas with the world.</p>
//           </div>
//         </header>

//         {/* Routes for Blog Pages */}
//         <Routes>
//           {/* Root route displays home page */}
//           <Route path="/" element={<HomePage />} /> {/* Home page for general content */}

//           {/* Route for Post List Page (List Blog) */}
//           <Route path="/posts" element={<PostList />} />

//           {/* Route for Add Post Page */}
//           <Route path="/add-post" element={<AddPost />} />
//         </Routes>
//       </div>
//     </div>
//   );
// };

// // Create a separate HomePage component for the root path
// const HomePage = () => {
//   return (
//     <div>
//       <h2>Welcome to the Home Page of My Blog!</h2>
//       <p>Here is some introduction or general content about the blog.</p>
//       <p>Click the "List Blog" button in the navbar to see all posts.</p>
//     </div>
//   );
// };

// export default App;

// import React from 'react';
// import { Routes, Route, Link, useNavigate } from 'react-router-dom';
// import AddPost from './pages/AddPost';  // Import AddPost component
// import PostList from './pages/PostList'; // Import PostList component
// import EditPost from './pages/EditPost'; // Import EditPost component
// import './App.css';  // Assuming global styles are applied here

// const App = () => {
//   const navigate = useNavigate(); // ✅ Define navigate using useNavigate()

//   return (
//     <div className="app-container">
//       {/* Navbar */}
//       <nav className="navbar">
//         <div className="navbar-logo">
//           <h1 onClick={() => navigate("/posts")} style={{ cursor: "pointer" }}>My Blog</h1>
//         </div>
//         <div className="navbar-links">
//           <button className="btn" onClick={() => navigate("/add-post")}>Add Blog</button>
//           <button className="btn" onClick={() => navigate("/posts")}>List Blog</button>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <div className="main-content">
//         <header className="hero">
//           <div className="hero-content">
//             <h1>Welcome to My Blog</h1>
//             <p>Share your thoughts and ideas with the world.</p>
//           </div>
//         </header>

//         {/* Routes for Blog Pages */}
//         <Routes>
//           {/* Root route displays home page */}
//           <Route path="/" element={<HomePage />} /> {/* Home page for general content */}

//           {/* Route for Post List Page (List Blog) */}
//           <Route path="/posts" element={<PostList />} />

//           {/* Route for Add Post Page */}
//           <Route path="/add-post" element={<AddPost />} />

//           {/* Route for Edit Post Page */}
//           <Route path="/edit-post/:id" element={<EditPost />} />
//         </Routes>
//       </div>
//     </div>
//   );
// };

// // Create a separate HomePage component for the root path
// const HomePage = () => {
//   return (
//     <div>
//       <h2>Welcome to the Home Page of My Blog!</h2>
//       <p>Here is some introduction or general content about the blog.</p>
//       <p>Click the "List Blog" button in the navbar to see all posts.</p>
//     </div>
//   );
// };

// export default App;

import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import AddPost from './pages/AddPost';  // Import AddPost component
import PostList from './pages/PostList'; // Import PostList component
import EditPost from './pages/EditPost'; // Import EditPost component
import './App.css';  // Assuming global styles are applied here

const App = () => {
  const navigate = useNavigate(); // ✅ Define navigate using useNavigate()

  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">
          <h1 onClick={() => navigate("/posts")} style={{ cursor: "pointer" }}>My Blog</h1>
        </div>
        <div className="navbar-links">
          <button className="btn" onClick={() => navigate("/add-post")}>Add Blog</button>
          <button className="btn" onClick={() => navigate("/posts")}>List Blog</button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="main-content">
        <header className="hero">
          <div className="hero-content">
            <h1>Welcome to My Blog</h1>
            <p>Share your thoughts and ideas with the world.</p>
          </div>
        </header>

        {/* Routes for Blog Pages */}
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Home page for general content */}
          <Route path="/posts" element={<PostList />} />
          <Route path="/add-post" element={<AddPost />} />
          <Route path="/edit-post/:id" element={<EditPost />} /> {/* EditPost route */}
        </Routes>
      </div>
    </div>
  );
};

// Create a separate HomePage component for the root path
const HomePage = () => {
  return (
    <div>
      <h2>Welcome to the Home Page of My Blog!</h2>
      <p>Here is some introduction or general content about the blog.</p>
      <p>Click the "List Blog" button in the navbar to see all posts.</p>
    </div>
  );
};

export default App;
