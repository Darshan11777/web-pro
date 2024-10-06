import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [identifier, setIdentifier] = useState("");  // This will hold either username or email
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  console.log("baseUrl:", baseUrl); // Should log your base URL
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(baseUrl + "user/login", {
        identifier,  // This field will be either the username or email
        password,
      }, {
        withCredentials: true, // This allows cookies to be sent with the request
        headers: {
          'Content-Type': 'application/json',
        }});
      console.log( "response",response);
      setMessage(`Success: ${response.data.message}`);
    } catch (error) {
      setMessage(`Error: ${error.response?.data?.message || "Login failed"}`);
    }
  };
console.log( "message",message);
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleLogin}>
          {/* Username or Email Field */}
          <div className="mb-4">
            <label htmlFor="identifier" className="block text-sm font-medium text-gray-700">
              Username or Email
            </label>
            <input
              id="identifier"
              type="text"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter your username or email"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Login
          </button>
        </form>

        {/* Show Success or Error Message */}
        {message && (
          <div
            className={`mt-4 p-4 rounded-md ${
              message.startsWith("Success") ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
            }`}
          >
            {message}
          </div>
        )}

        {/* New User? Register Link */}
        <div className="mt-6 text-center">
          <p className="text-sm">
            New user?{" "}
            <Link to="/register" className="text-blue-500 hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
