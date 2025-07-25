"use client";
import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register Form Data:", formData);
    // Yaha bhi API call kar sakte ho
  };

  return (
    <div className="flex items-center justify-center py-4 sm:py-10 px-4 min-h-[80vh]">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>

        <label className="block mb-2">Full Name</label>
        <input
          type="text"
          name="name"
          required
          onChange={handleChange}
          className="w-full p-2 border rounded mb-4"
        />

        <label className="block mb-2">Email</label>
        <input
          type="email"
          name="email"
          required
          onChange={handleChange}
          className="w-full p-2 border rounded mb-4"
        />

        <label className="block mb-2">Password</label>
        <input
          type="password"
          name="password"
          required
          onChange={handleChange}
          className="w-full p-2 border rounded mb-4"
        />

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 cursor-pointer"
        >
          Register
        </button>

        <p className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link href="/login" className="text-black underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}