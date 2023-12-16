import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { JsonPlaceholderAPI } from "../api";

const SinglePostPage = () => {
  const [post, setPost] = useState({});
  const { postId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getPost = async () => {
      const response = await JsonPlaceholderAPI.get(`/posts/${postId}`);
      setPost(response.data);
    };
    getPost();
  }, []);

  return (
    <div>
      <button onClick={() => navigate(-1)}>Назад</button>
      <h3>{post.title}</h3>
    </div>
  );
};
export default SinglePostPage;
