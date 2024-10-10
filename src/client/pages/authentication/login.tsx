import React, { useState } from "react";
// import { useNavigate } from 'react-router-dom'
import ggIcon from "../../assets/png/google.png";
// import {z} from 'zod'
import visibleIcon from "../../assets/png/visible_eye.png";
import invisibleIcon from "../../assets/png/invisible_eye.png";
const Login: React.FC = () => {
  // const [email, setEmail] = useState<string>('');
  // const [password, setPassword] = useState<string>('');
  // const [error, setError] = useState<string>('');
  // const navigate = useNavigate();

  // const loginCheck = z.object({
  //   email: z.string().email('Invalid email address'),
  //   password: z.string().min(0, 'Password is required'),
  // });

  // const handleLogin = (e: React.FormEvent) => {
  //   e.preventDefault();

  // try {
  //   loginCheck.parse({email,password});

  //   const User = localStorage.getItem('registeredUser'); //Lay du lieu nguoi dung vua dang ky

  //   if(User) {

  //     const {email:storeEmail, password:storePassword}.JSON.parse{User};
  //     if(email === storeEmail && password === storePassword) {

  //       navigate('/');
  //     } else {
  //       // Mat khau hoac email sai
  //       setError('Invalid email or password');
  //     }
  //   } else {
  //     // Nguoi dung khong ton tai
  //     setError('No registered user found. Please sign up first.');
  //   }
  // } catch (error) {
  //   if (error instanceof z.ZodError) {
  //     //Lay loi tu zod
  //     setError(error.errors[0].message); // Hiển thị thông báo lỗi đầu tiên
  //   }
  // }
  // };

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="min-h-screen flex justify-center items-start mt-40">
      <div className="max-w-md w-full space-y-3">
        <div className="flex justify-center items-center mb-8">
          <h1 className="text-3xl font-bold mr-4 font-inter">Welcome back!</h1>
        </div>
        <div>
          <label className="text-lg font-semibold text-black font-inter">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="block w-full border-2 rounded-md border-bor-color-grey p-2 mt-1 bg-transparent"
            placeholder="Enter email"
          />
        </div>
        <div className="mt-6 relative">
          <label className="text-lg font-semibold text-black font-inter ">
            Password
          </label>
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            className="w-full border-2 rounded-md border-bor-color-grey p-2 mt-1 bg-transparent"
            placeholder="Enter password"
          />
          <img
            src={showPassword ? visibleIcon : invisibleIcon}
            alt="Toggle Password Visibility"
            className="absolute inset-y-2 right-0 pr-3 h-5 w-9 mt-9 cursor-pointer"
            onClick={togglePasswordVisibility}
          />
        </div>
        <div className="mt-3">
          <a
            href=""
            className="text-blue-main flex items-center justify-end font-inter font-medium"
          >
            Forgotten password
          </a>
        </div>
        <div className="mt-3  flex items-center justify-center">
          <button className=" text-white rounded-lg bg-blue-main w-full h-11 text-lg font-inter">
            Sign In
          </button>
        </div>
        <div className="text-center mt-3">
          <p className="text-base text-gray-600 font-inter">
            Do not have an account?{" "}
            <a
              href="/register"
              className="text-blue-main font-inter font-semibold"
            >
              Sign up
            </a>
          </p>
        </div>
        <div className="relative flex py-1 items-center">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="mx-10 text-base">Or</span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        <div>
          <button className="w-full flex justify-center items-center bg-white border-2 border-gray-300 py-1 px-4 rounded-md shadow-sm hover:bg-gray-100 font-inter font-semibold">
            <img src={ggIcon} alt="Google" className="w-9 h-9 mr-2" />
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};
export default Login;
