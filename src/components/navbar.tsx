import { useState } from "react";
import { NavbarText } from "../libs/navbar";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-cradbg/40 fixed top-6 right-4 left-4 z-50 flex h-[56px] items-center justify-between rounded-2xl border border-amber-400/30 px-6 py-3 font-semibold text-white uppercase shadow-lg backdrop-blur-md transition-colors duration-300 hover:border-amber-400/50 sm:right-8 sm:left-8 md:right-12 md:left-12 xl:right-48 xl:left-48">
      <div>
        <p className="text-2xl font-extrabold tracking-wide text-amber-300 drop-shadow-md">
          Logo
        </p>
      </div>

      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-md p-2 transition hover:bg-amber-400/30 focus:outline-none active:bg-amber-400/50"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X className="h-7 w-7 text-amber-300" />
          ) : (
            <Menu className="h-7 w-7 text-amber-300" />
          )}
        </button>
      </div>

      <ul className="hidden flex-wrap items-center space-x-6 text-base md:flex">
        {NavbarText.map((navbar, index) => (
          <li key={index}>
            <a
              href={navbar.path}
              className="rounded-lg px-4 py-2 font-medium text-white transition-colors duration-300 hover:bg-amber-400 hover:text-black"
            >
              {navbar.title}
            </a>
          </li>
        ))}
      </ul>

      {menuOpen && (
        <ul className="bg-cradbg/40 absolute top-full right-0 mt-3 flex w-full flex-col items-center gap-3 rounded-2xl border border-amber-400/50 p-5 text-white shadow-xl backdrop-blur-lg md:hidden">
          {NavbarText.map((navbar, index) => (
            <li key={index} className="w-full text-center">
              <a
                href={navbar.path}
                onClick={() => setMenuOpen(false)}
                className="block rounded-lg px-6  py-3 font-semibold text-amber-300 transition-colors duration-300 hover:bg-amber-400 hover:text-black"
              >
                {navbar.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
