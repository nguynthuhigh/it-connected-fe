import React from "react";
import logo from "../../assets/png/logo.png";
import ggIcon from "../../assets/png/google.png";
const Register: React.FC = () => {
  //   const [name, setName] = useState('');
  //   const [email, setEmail] = useState('');
  //   const [password, setPassword] = useState('');
  //   const [error, setError] = useState('');
  //   const navigate = useNavigate();
  //   const handleRegister = (e: React.FormEvent) => {
  //     e.preventDefault();
  //     if (name && email && password) {
  //       const newUser = {
  //         name,
  //         email,
  //         password,
  //       };
  //       localStorage.setItem('registeredUser', JSON.stringify(newUser));
  //       navigate('./login');
  //     } else {
  //       setError('');
  //     }
  //   };
  return (
    <div className="min-h-screen flex justify-center items-start pt-12">
      <div className="max-w-md w-full space-y-4">
        <div className="flex flex-col justify-center items-center">
          <img src={logo} alt="Logo" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-black">
            SIGN UP
          </h2>
        </div>
        <div>
          <label className="text-lg font-bold text-black">Your name</label>
          <input
            id="name"
            name="name"
            type="text"
            className="w-full border-2 rounded-md border-bor-color-grey p-2 mt-1 bg-transparent"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label className="text-lg font-bold text-black">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-full border-2 rounded-md border-bor-color-grey p-2 mt-1 bg-transparent"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="text-lg font-bold text-black">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            className="w-full border-2 rounded-md border-bor-color-grey p-2 mt-1 bg-transparent"
            placeholder="Enter your password"
          />
        </div>
        <div className="mt-3  flex items-center justify-center">
          <button className=" font-bold text-white rounded-md bg-btn-login w-full h-11 text-xl">
            Sign Up
          </button>
        </div>
        <div className="text-center mt-4">
          <p>
            Already have an account?{" "}
            <a href="/login" className=" text-forgotten hover:underline">
              Sign in now!
            </a>
          </p>
        </div>
        <div className="relative flex py-2 items-center">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="mx-4 text-lg font-semibold">Or</span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        <div>
          <button className="w-full flex justify-center items-center text-lg font-semibold bg-white border-2 border-gray-300 py-1 px-4 rounded-md shadow-sm hover:bg-gray-100">
            <img src={ggIcon} alt="Google" className="w-9 h-9 mr-2" />
            Sign up with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
