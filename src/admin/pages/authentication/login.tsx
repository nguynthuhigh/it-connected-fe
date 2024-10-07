import { useState } from "react";
import { useNavigate } from "react-router-dom";
const users = [
  { username: "admin1", password: "123456abc" },
  { username: "admin2", password: "123456cdf" },
]; // fake data
const Login = () => {
  const [user, setUser] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();
  const checkLogin = () => {
    const u = users.find((u) => u.username === user); // lưu giá trị vào u sao khi so sánh giá trị username của u với users
    if (!u) {
      setError("Something wrong, try again");
      return;
    } // người dùng để trống thông tin login
    if (u.username !== user) {
      setError("Something wrong, try again");
      return;
    } // sai mật khẩu
    if (u.password !== pass) {
      setError("Something wrong, try again");
      return;
    } // sai mật khẩu
    setError("");
    navigate("/manage-user"); // chuyển sang trang khác khi đăng nhập thành công
  };
  const hideError = () => {
    if (error) {
      setError("");
    }
  }; // ẩn thông báo lỗi
  return (
    <div>
      <h1 className="text-5xl font-semibold text-center text-black">Log in</h1>
      <p className="font-normal mt-4 text-black">Welcome back!</p>
      <div className="mt-4 bg-white px-5 py-5 rounded-2xl shadow-2xl border border-bor-color-grey">
        <div>
          <label className="text-lg font-semibold text-black">Username</label>
          <input
            className="w-full border-2 rounded-md border-bor-color-grey p-2 mt-1 bg-transparent"
            placeholder="Enter user name"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            onClick={hideError}
          />
        </div>
        <div className="mt-3">
          <label className="text-lg font-semibold text-black">Password</label>
          <input
            className="w-full border-2 rounded-md border-bor-color-grey p-2 mt-1 bg-transparent"
            placeholder="Enter password"
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            onClick={hideError}
          />
        </div>
        {error && <div className="mt-3 text-red-500 text-center">{error}</div>}
        <div className="mt-3  flex items-center justify-center">
          <button
            className=" font-semibold text-white rounded-md bg-btn-login w-full h-11 "
            onClick={checkLogin}
          >
            Log in
          </button>
        </div>
        <div className="mt-3">
          <a
            href=""
            className="text-forgotten flex items-center justify-center"
          >
            Forgotten password
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
