import { useState } from "react";
import Button from "./ui/Button";
import { loginUser } from "@/services/api";
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; 
  const validateEmail = (email) => { const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; return re.test(String(email).toLowerCase()); };

  

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!passwordRegex.test(password)) { setError('Password or login empty.'); return; } 
    if (!validateEmail(email)) { setError('Invalid email format'); return; }

    try {
       await loginUser(email, password);
       setEmail('');
       setPassword('');
    }
    catch (error) {
      setError('An error occurred during login')
  }
  }

  return (
    <>

      <div className="min-h-screen flex items-center justify-center bg-gray-100 ">
        <div className=" relative flex flex-col justify-start pb-40"><h2 className="text-2xl font-bold  text-left mt-2 mb-40 onClick={() => navigate('/inspireme')">Log in</h2>
          <div className="relative mb-1">

            {error && <p className="text-red-500 text-center mb-4">{error}</p>}

            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="shadow-lg w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div className="mb-8 relative">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="shadow-lg w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg
                    className="h-5 w-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"

                  >

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12m-3 0a3 3 0 110-6 3 3 0 010 6zm9 0a9 9 0 11-9-9 9 9 0 019 9zm-9 3c-3.39 0-7.42 1.74-9 5 2.58-2.55 6.24-4 9-4s6.42 1.45 9 4c-1.58-3.26-5.61-5-9-5z"
                    ></path>
                  </svg>
                </span>
              </div>
              <div className="text-right mb-4">
                <a href="#" className="text-sm text-gray-600 hover:text-blue-600">
                  Forgot your password?
                </a>
              </div>
              <Button
                type="submit"
                className=" text-white rounded-full font-semibold hover:bg-blue-700 transition-colors"onClick={() => navigate('/Inspireme')}
              >
                Log in
              </Button>
              <div className="w-[334px] mb-4 text-center mt-6 text-sm text-gray-600">
                Don't have an account yet?{" "}
                <a href="#" className="text-blue-600 hover:underline"onClick={() => navigate('/SignUp')}>
                  Sign up


                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );

}

export default Login;

