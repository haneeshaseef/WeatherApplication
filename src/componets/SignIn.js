import { signInWithEmailAndPassword } from "firebase/auth";
import React,{useState} from "react";
import { auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const signIn = async (e) => {
    e.preventDefault(); 
    try {
      // sign in the user with the user email and password
      await signInWithEmailAndPassword(auth,email,password);
      navigate("/home");
    } catch (error) {
      setError("Enter the valid  email and password"); 
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="max-w-md w-full space-y-8 p-6 bg-white rounded-xl shadow-xl">
        <h1 className="text-3xl font-bold text-center text-gray-800">Login</h1>
        <form className="space-y-6" onSubmit={signIn}>
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          {error && (
            <p className="text-red-500 mb-4">{error}</p>
          )}
          <div>
            <button
              type="submit"
              className="w-full px-3 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-blue-500 focus:ring-offset-2"
            >
              Sign In
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default SignIn;
