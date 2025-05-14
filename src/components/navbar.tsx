import { NavbarText } from "../libs/navbar";

export default function Navbar() {
  return (
    <div className="bg-cradbg flex- fixed top-6 right-[200px] left-[200px] z-50 flex h-[50px] items-center justify-between rounded-xl px-[80px] py-8 text-white shadow-2xl">
      <div>
        <p className="text-2xl font-bold">Logo</p>
      </div>
      <div>
        <ul className="flex space-x-6">
          {NavbarText.map((navbar, index) => (
            <li key={index}>
              <a
                href={`#${navbar.toLowerCase().replace(/\s/g, "-")}`}
                className="hover:text-green-400"
              >
                {navbar}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <a
        href="/resume/Resume-Pongsapak-(Au).pdf"
        download
        className="rounded-md border border-black bg-black px-3 py-2 text-white hover:bg-white/40 hover:text-black"
      >
        <p className="flex items-center justify-center gap-2 font-bold">
          Resume
        </p>
      </a>
    </div>
  );
}
