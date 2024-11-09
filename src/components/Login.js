import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = localStorage.getItem(username);

    if (!storedUser) {
      setError('User does not exist');
      return;
    }

    const userData = JSON.parse(storedUser);

    if (userData.password !== password) {
      setError('Incorrect password');
      return;
    }

    // Login sukses, simpan status ke localStorage
    localStorage.setItem('isLoggedIn', 'true');
    navigate('/newpage'); // Arahkan ke halaman Home setelah login sukses
  };

  // Fungsi untuk mengarahkan ke halaman register
  const handleRegister = () => {
    navigate('/register'); // Arahkan ke halaman register
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg w-80">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded"
          >
            Login
          </button>
        </form>
        <button
          onClick={handleRegister}
          className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white font-medium py-2 rounded"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Login;
