import { useState, useEffect } from "react";
import { JsonPlaceholderAPI } from "../api";
import { Link } from "react-router-dom";

const PostsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await JsonPlaceholderAPI.get("/posts?_limit=5");
      setPosts(response.data);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default PostsPage;
