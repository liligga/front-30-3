import "./App.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import PostsPage from "./pages/PostsPage";
import AboutPage from "./pages/AboutPage";
import SinglePostPage from "./pages/SinglePostPage";
import LoginPage from "./pages/LoginPage";
import ParentPage from "./pages/ParentPage";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="parent" element={<ParentPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="posts" element={<PostsPage />} />
          <Route path="posts/:postId" element={<SinglePostPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<h4>Not found</h4>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
