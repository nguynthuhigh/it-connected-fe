import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import ggIcon from '../../assets/png/google.png';
import visibleIcon from '../../assets/png/visible_eye.png'
import invisibleIcon from '../../assets/png/invisible_eye.png'
const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const navigate = useNavigate();
  const registerCheck = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters').regex(/\d/, 'Must contain at least one number'),
    confirmPassword: z.string().min(1, 'Confirm password is required'),
  }).refine((data) => data.password === data.confirmPassword, { //Khai bao kiem tra tu chon
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });
  const [isSignUpSuccess, setIsSignUpSuccess] = useState<boolean>(false);
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      registerCheck.parse({ //kiem tra du lieu o trong registerCheck
        email,
        password,
        confirmPassword,
      });
      const newUser = {
        email,
        password,
      };
      localStorage.setItem('registeredUser', JSON.stringify(newUser));
      setIsSignUpSuccess(true);
      // Chuyen toi trang login sau 1s
      setTimeout(() => {
        navigate('/login');
      }, 1000);
    } catch (error) {
      if (error instanceof z.ZodError) { //Kiem tra loi co phai do zod tao ra hay ko
        const errorMessages: Record<string, string> = {};
        error.errors.forEach((err) => {
          errorMessages[err.path[0] as string] = err.message;
        });
        setErrors(errorMessages);
      }
    }
  };
  const hideError = () => {
    if (Object.keys(errors).length > 0) {
      setErrors({}); //an thong bao loi
    }
  }; 
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    }; 
    const toggleConfirmPasswordVisibility = () => {
      setShowConfirmPassword(!showConfirmPassword);
    }; 
    // An/hien pass va confirm pass
  return (
    <div className="min-h-screen flex justify-center items-start">
      <div className="max-w-md w-full space-y-7">
        <div className="flex flex-col justify-center items-center">
          <h2 className="mt-40 text-center text-3xl font-bold text-black font-inter">New account, new jobs!</h2>
        </div>
        <form onSubmit={handleRegister}>
          <div>
            <label className="text-lg font-semibold text-black font-inter">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onClick={hideError}
              className="w-full border-2 rounded-md border-bor-color-grey p-2 mt-1 bg-transparent font-inter"
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}
          </div>
          <div className='mt-3 relative'>
            <label className=" text-lg font-semibold text-black font-inter">Password</label>
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onClick={hideError}
              className="w-full border-2 rounded-md border-bor-color-grey p-2 mt-1 bg-transparent font-inter"
              placeholder="Enter your password"
            />
             <img
            src={showPassword ? visibleIcon : invisibleIcon}
            alt="Toggle Password Visibility"
            className="absolute inset-y-2 right-0 pr-3 h-5 w-9 mt-9 cursor-pointer"
            onClick={togglePasswordVisibility}
          />
            {errors.password && <p className="text-red-400 text-sm">{errors.password}</p>}
          </div>
          <div className='mt-3 relative'>
            <label className="text-lg font-semibold text-black font-inter">Confirm Password</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              onClick={hideError}
              className="w-full border-2 rounded-md border-bor-color-grey p-2 mt-1 bg-transparent font-inter"
              placeholder="Confirm your password"
            />
             <img
            src={showConfirmPassword ? visibleIcon : invisibleIcon}
            alt="Toggle Password Visibility"
            className="absolute inset-y-2 right-0 pr-3 h-5 w-9 mt-9 cursor-pointer"
            onClick={toggleConfirmPasswordVisibility}
          />
            {errors.confirmPassword && <p className="text-red-400 text-sm">{errors.confirmPassword}</p>}
          </div>
          <div className='mt-3'>
            <a href='' className='text-blue-main flex items-center justify-end font-inter font-medium'>Forgotten password</a>
        </div>
          <div className="mt-3 flex items-center justify-center">
            <button type="submit" className=" text-white bg-blue-main rounded-lg bg-btn-login w-full h-11 text-lg font-inter">
              Sign Up
            </button>
          </div>
        </form>
        <div className="text-center mt-3">
          <p className='font-inter text-base'>Already have an account? <a href="/login" className="text-blue-main font-inter font-semibold">Sign in now!</a></p>
        </div>
        <div className="relative flex mt-3 items-center">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="mx-4 text-sm font-semibold">Or</span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        <div>
          <button className="w-full flex justify-center items-center text-lg font-semibold bg-white border-2 border-gray-300 mt-3 px-4 rounded-md shadow-sm hover:bg-gray-100">
            <img src={ggIcon} alt="Google" className="w-9 h-9 mr-2" />
            Sign up with Google
          </button>
        </div>
        {isSignUpSuccess && (
          <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded-md shadow-lg text-center">
              <h2 className="text-2xl font-bold text-green-600">Sign Up Successful!</h2>
              <p className="mt-2">Redirecting to login page...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
