import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // запрос на сервер для проверки логина и пароля
    navigate("/posts");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default LoginPage;
