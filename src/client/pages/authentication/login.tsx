import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/png/logo.png'
import visionIcon from '../../assets/png/Vision.png'
import ggIcon from '../../assets/png/google.png'
const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className='min-h-screen flex justify-center items-start pt-12'>
        <div className='max-w-md w-full space-y-4'>
        <div className="flex justify-center items-center mb-8">
        <h1 className="text-3xl font-bold mr-4">WELCOME BACK TO</h1>
        <img src={logo} alt="Your Logo" className="h-auto w-auto" />
      </div>
        <div>
            <label className='text-lg font-bold text-black'>Email</label>
            <input
                  id="email"
                  name="email"
                  type="email"
                  className='block w-full border-2 rounded-md border-bor-color-grey p-2 mt-1 bg-transparent'
                  placeholder='Enter your email'
            />
        </div>
        <div className='mt-6 relative'>
            <label className='text-lg font-bold text-black '>Password</label>
            <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  className='w-full border-2 rounded-md border-bor-color-grey p-2 mt-1 bg-transparent'
                  placeholder='Enter your password'
            />
            <img
            src={showPassword ? visionIcon : visionIcon}
            alt="Toggle Password Visibility"
            className="absolute inset-y-2.5 right-0 pr-3 h-6 w-9 mt-8 cursor-pointer"
            onClick={togglePasswordVisibility}
          />
        </div>
          <div className='mt-3  flex items-center justify-center'>
            <button className=' font-bold text-white rounded-md bg-btn-login w-full h-11 text-xl '>Log in</button>
          </div>
          <div className='mt-3'>
            <a href='' className='text-forgotten flex items-center justify-center'>Forgotten password</a>
          </div>
      <div className="text-center mt-3">
        <p className="text-base text-gray-600">
          Do not have an account? <a href="/register" className="text-blue-600 hover:underline">Sign up now!</a>
        </p>
      </div>
      <div className="relative flex py-1 items-center">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="mx-4 text-lg font-semibold">Or</span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
      <div>
        <button className="w-full flex justify-center items-center bg-white border-2 border-gray-300 py-1 px-4 rounded-md shadow-sm hover:bg-gray-100">
          <img src={ggIcon} alt="Google" className="w-9 h-9 mr-2" />
          Continue with Google
        </button>
      </div>
        </div>
    </div>
  );
};
export default Login;
