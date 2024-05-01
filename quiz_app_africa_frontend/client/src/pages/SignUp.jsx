import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState([]);

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);
      const res = await fetch(`/api/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setLoading(false);
      if (data.success === false) {
        setError(false);
        return;
      }
      navigate("/sign-in");
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <>
      <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-28">
        <div className="p-3 max-w-lg mx-auto">
          <h1 className="text-3xl text-center text-gray font-semibold my-7">
            Sign Up
          </h1>

          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              id="username"
              className="bg-slate-100 p-3 rounded-lg border border-transparent focus:outline-none focus:border-transparent"
              required
              onChange={handleChange}
            />

            <input
              type="email"
              placeholder="Email"
              id="email"
              className="bg-slate-100 p-3 rounded-lg border border-transparent focus:outline-none focus:border-transparent"
              required
              onChange={handleChange}
            />

            <input
              type="password"
              placeholder="Password"
              id="password"
              className="bg-slate-100 p-3 rounded-lg border border-transparent focus:outline-none focus:border-transparent"
              required
              onChange={handleChange}
            />

            <button
              disabled={loading}
              className="gradientBg text-white p-3 rounded-lg hover:opacity-80
            disabled:opacity-50 text-2xl font-semibold"
            >
              {loading ? "Loading" : "Sign Up"}
            </button>
          </form>
          <div className="pt-3 pb-3 text-2xl text-gray">
            <Link to="/sign-in">
              <p>
                Have an account?
                <span className="text-blue-900 ms-3">Sign In</span>{" "}
              </p>
            </Link>
          </div>

          <div>
            <p className="text-red-700 text-center text-2xl">
              {error && "Something went wrong!."}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
