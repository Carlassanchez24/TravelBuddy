import React, { useState } from 'react';


const login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (email === 'Dullohpart1@gmail.com' && password === 'password') {
      setError('');
      
    } else {
      setError('The mail or password you entered is wrong');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm">
        <h2 className="text-3xl font-bold text-center mb-6">Log in</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="bg-white p-8 shadow-lg rounded-lg">
          <div className="mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Mail"
              className="w-full p-4 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-600"
            />
          </div>
          <div className="mb-4 relative">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full p-4 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-600"
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-600 cursor-pointer">
              👁️
            </span>
          </div>
          <div className="flex justify-between items-center mb-6">
            <a href="#" className="text-sm text-teal-600 hover:underline">Forgot your password?</a>
          </div>
          <button
            type="submit"
            className="w-full bg-teal-600 text-white p-4 rounded-full hover:bg-teal-700 transition duration-300"
            style={{ backgroundColor: '#025A6E' }}
            >
            Log in
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Don't have an account yet? <a href="#" className="text-teal-600 hover:underline"  onClick={() => navigate('/page3')}>Sign up</a>
            
          </p>
        </div>
        
      </div>
    </div>
  );
};
export default login;