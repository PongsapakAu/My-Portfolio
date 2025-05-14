import About from "./components/about";
import Navbar from "./components/navbar";
import Project from "./components/project";

function App() {
  return (
    <div className="min-h-screen bg-linear-to-r from-zinc-800 to-black/88 md:px-[200px] xl:px-[200px]">
      <Navbar />
      <div className="flex flex-col gap-8 pt-28">
        <About />
        <Project />
      </div>
    </div>
  );
}

export default App;
