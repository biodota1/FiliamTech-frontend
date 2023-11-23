import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="w-1/2 flex justify-center items-center p-[50px]">
      <div className="w-2/3">
        <h1 className="text-5xl font-bold p-5 ml-16">Login</h1>
        <h2 className="text-3xl font-bold p-5">Welcome back mate!</h2>
        <form action="">
          <div className="form-control w-full max-w-xs font-bold ">
            <label className="label">
              <span className="label-text text-black">Username</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs mb-5 bg-slate-100 border-violet-500"
            />
            <label className="label">
              <span className="label-text text-black">Password</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs mb-5 bg-slate-100 border-violet-500"
            />
            <label className="label cursor-pointer">
              <span className="label-text text-black">Remember me</span>
              <input
                type="checkbox"
                checked="checked"
                className="checkbox checkbox-primary mb-5"
              />
            </label>
            <Link to="/admin">
              <button className="btn bg-violet-500 text-white w-full">
                Login
              </button>
            </Link>

            <label className="label">
              <span>
                Don't have an account yet?{" "}
                <span className="text-violet-500">Register</span>
              </span>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
}
