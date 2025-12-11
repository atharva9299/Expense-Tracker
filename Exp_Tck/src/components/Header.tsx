import React from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

export default function Header() {
  return (
    <header className="shadow sticky z-50 top-0 bg-white">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-orange-600 flex items-center justify-center text-white font-bold">
            ET
          </div>
          <h1 className="text-lg font-semibold">Expense Tracker</h1>
        </div>

        <div className="flex gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              clsx(
                "px-3 py-2 rounded",
                isActive ? "text-orange-600 font-semibold" : "text-slate-700"
              )
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/add"
            className={({ isActive }) =>
              clsx(
                "px-3 py-2 rounded",
                isActive ? "text-orange-600 font-semibold" : "text-slate-700"
              )
            }
          >
            Add
          </NavLink>
          <NavLink
            to="/list"
            className={({ isActive }) =>
              clsx(
                "px-3 py-2 rounded",
                isActive ? "text-orange-600 font-semibold" : "text-slate-700"
              )
            }
          >
            List
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
