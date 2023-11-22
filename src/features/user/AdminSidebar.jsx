import React from "react";
import { Link } from "react-router-dom";

export default function AdminSidebar() {
  return (
    <div className="p-5 flex flex-col gap-[20px] bg-violet-500 min-h-screen text-white">
      <section className="py-10 flex">
        <div className="avatar placeholder">
          <div className="bg-neutral text-neutral-content rounded-full w-12">
            <span className="text-xl">K</span>
          </div>
        </div>
        <div className="text-center">
          <span className="px-3 text-md font-bold pt-2">Welcome</span> <br />
          <span className="text-md font-bold pt-2">Admin</span>
        </div>
      </section>
      <section>
        <Link to="/">
          <button className="btn w-full bg-violet-500 border-none text-white font-bold hover:bg-violet-600">
            Dashboard
          </button>
        </Link>
      </section>
      <section>
        <button className="btn w-full bg-violet-500 border-none text-white font-bold hover:bg-violet-600">
          Notes
        </button>
      </section>
      <section>
        <button className="btn w-full bg-violet-500 border-none text-white font-bold hover:bg-violet-600">
          Calendar
        </button>
      </section>
      <section>
        <Link to="timesheet">
          <button className="btn w-full bg-violet-500 border-none text-white font-bold hover:bg-violet-600">
            Timesheet
          </button>
        </Link>
      </section>
      <section>
        <button className="btn w-full bg-violet-500 border-none text-white font-bold hover:bg-violet-600">
          People
        </button>
      </section>
    </div>
  );
}
