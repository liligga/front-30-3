import { useState, useEffect } from "react";
import { JsonPlaceholderAPI } from "../api";
import { Link, useFetcher, useSearchParams } from "react-router-dom";

// ?
// sort=popular
// &
// page=1
// &
// fbrand=4534

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  let url = "/posts";
  if (!searchParams.get("userr")) {
    url = "/posts";
  } else {
    url = `/posts?userId=${searchParams.get("userr")}`;
  }

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await JsonPlaceholderAPI.get(url);
      setPosts(response.data);
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await JsonPlaceholderAPI.get(url);
      setPosts(response.data);
    };
    fetchPosts();
  }, [searchParams]);
 
  return (
    <div>
      <ul className="horizontal">
        <li onClick={() => setSearchParams({})}>Показать всё</li>
        {[1, 2, 3, 4, 5].map((user) => (
          <li onClick={() => setSearchParams({ userr: user })}>User {user}</li>
        ))}
      </ul>
      <h3>Posts:</h3>
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

// https://dummyjson.com/posts?limit=10&skip=20