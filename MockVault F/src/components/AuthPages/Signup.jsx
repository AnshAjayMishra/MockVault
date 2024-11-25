import React from "react";
import Glogo from "../../assets/svg/google1.svg"
import Alogo from "../../assets/svg/apple1.svg"
import Login from "./Login";



const Signup = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black text-white">
      <div className="w-96 p-8 rounded-lg bg-black shadow-lg border border-white">
        <h2 className="text-2xl font-bold mb-4">Sign up</h2>
        <p className="mb-6">Create an account for free to get started!</p>
        <form>
          <div className="mb-4">
            <label className="block mb-2">Name</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full px-4 py-2 rounded-lg bg-black border border-gray-600 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Email</label>
            <input
              type="email"
              placeholder="Type your email address"
              className="w-full px-4 py-2 rounded-lg bg-black border border-gray-600 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2">Password</label>
            <input
              type="password"
              placeholder="Choose a strong password"
              className="w-full px-4 py-2 rounded-lg bg-black border border-gray-600 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-gradient-to-r from-orange-400 to-yellow-400 text-white shadow-beam-light hover:opacity-90 transition"
          >
            SIGN UP
          </button>
        </form>
        <div className="flex justify-center mt-4 space-x-4">
          <button className="flex items-center justify-center w-10 h-10 bg-black rounded-full hover:opacity-75">
            <img src={Glogo} alt="Google" className="w-5" />
          </button>
          <button className="flex items-center justify-center w-10 h-10 bg-black rounded-full hover:opacity-75">
            <img src={Alogo} alt="Apple" className="w-5" />
          </button>
        </div>
        <p className="text-center mt-4">
          Already have an account?{" "}
          <a href={<Login/>} className="text-white underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
