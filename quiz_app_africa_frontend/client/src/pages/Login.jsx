import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInStart } from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { signInFailure, signInSuccess } from "../redux/user/userSlice";

const Login = () => {
  const [formData, setFormData] = useState([]);
  const { loading, error } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch(`/api/auth/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success === false) {
        dispatch(signInFailure(data));
        return;
      }
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error));
    }
  };

  return (
    <>
      <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-28">
        <div className="p-3 max-w-lg mx-auto">
          <h1 className="text-3xl text-center text-gray font-semibold my-7">
            Sign In
          </h1>

          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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
              {loading ? "Loading" : "Sign In"}
            </button>
          </form>
          <div className="pt-3 pb-3 text-2xl text-gray">
            <Link to="/sign-up">
              <p>
                Need account?
                <span className="text-blue-900 ms-3">Sign Up</span>{" "}
              </p>
            </Link>
          </div>

          <div>
            <p className="text-red-700 text-center text-2xl">
              {error ? error.message || "Something went wrong!." : ""}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
