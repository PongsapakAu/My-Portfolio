import { NavbarText } from "../libs/navbar";

export default function Navbar() {
  return (
    <div className="fixed top-6 left-4 right-4 z-50 flex h-[50px] items-center justify-between rounded-xl border-[0.5px] border-amber-50/20 bg-cradbg/30 px-6 py-4 font-semibold text-white uppercase shadow-2xl backdrop-blur-sm hover:border-amber-50/35
      sm:left-8 sm:right-8 md:left-12 md:right-12 xl:left-48 xl:right-48">
      
      {/* Logo */}
      <div>
        <p className="text-xl font-bold md:text-2xl">Logo</p>
      </div>

      {/* Navbar Items */}
      <div>
        <ul className="flex flex-wrap items-center space-x-4 text-sm md:space-x-6 md:text-base">
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
      </div>

      {/* Resume Download - Optional */}
      {/* 
      <a
        href="/resume/Resume-Pongsapak-(Au).pdf"
        download
        className="hidden md:flex rounded-md border border-black bg-black px-3 py-2 text-white hover:bg-white/40 hover:text-black"
      >
        <p className="flex items-center justify-center gap-2 font-bold">
          Resume
        </p>
      </a> 
      */}
    </div>
  );
}
