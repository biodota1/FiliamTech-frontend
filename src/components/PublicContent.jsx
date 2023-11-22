import React from "react";

export default function PublicContent() {
  const content = (
    <div className="w-1/2 flex justify-center items-center p-[100px]">
      <div className="w=2/3">
        <h1 className="text-5xl font-bold">
          Unleash Your Creativity <br /> with Notetify!
        </h1>
        <p className="text-xl font-bold mt-3">
          Organize, plan, and express yourself effortlessly. <br /> Our Sticky
          Notes Maker is here to bring your thoughts to life.
        </p>
        <button className="btn mt-3 bg-violet-500 text-white">
          Get Started
        </button>
      </div>
    </div>
  );
  return content;
}
