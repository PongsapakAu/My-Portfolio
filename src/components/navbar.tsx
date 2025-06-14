import { useState } from "react";
import { NavbarText } from "../libs/navbar";
import { Menu, X } from "lucide-react"; // คุณต้องติดตั้ง lucide-react หรือใช้ไอคอนอื่นแทน

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-cradbg/30 fixed top-6 right-4 left-4 z-50 flex h-[50px] items-center justify-between rounded-xl border-[0.5px] border-amber-50/20 px-6 py-4 font-semibold text-white uppercase shadow-2xl backdrop-blur-sm hover:border-amber-50/35 sm:right-8 sm:left-8 md:right-12 md:left-12 xl:right-48 xl:left-48">
      {/* Logo */}
      <div>
        <p className="text-xl font-bold md:text-2xl">Logo</p>
      </div>

      {/* Hamburger Button (Mobile) */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="focus:outline-none"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Navbar Items (Desktop) */}
      <ul className="hidden flex-wrap items-center space-x-4 text-sm md:flex md:space-x-6 md:text-base">
        {NavbarText.map((navbar, index) => (
          <li key={index}>
            <a
              href={`#${navbar.toLowerCase().replace(/\s/g, "-")}`}
              className="rounded-md transition-all duration-200 hover:mx-2 hover:bg-gray-300 hover:px-4 hover:py-2 hover:text-gray-800"
            >
              {navbar}
            </a>
          </li>
        ))}
      </ul>

      {/* Dropdown Menu (Mobile) */}
      {menuOpen && (
        <ul className="bg-cradbg/90 absolute top-full right-0 mt-2 flex w-full flex-col items-center gap-2 rounded-xl border border-amber-50/20 p-4 text-sm text-white backdrop-blur-sm md:hidden">
          {NavbarText.map((navbar, index) => (
            <li key={index} className="w-full text-center">
              <a
                href={`#${navbar.toLowerCase().replace(/\s/g, "-")}`}
                onClick={() => setMenuOpen(false)} // ปิดเมนูเมื่อคลิก
                className="block w-full rounded-md px-4 py-2 transition-all duration-200 hover:bg-gray-300 hover:text-gray-900"
              >
                {navbar}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
