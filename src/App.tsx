import About from "./components/about";
import Navbar from "./components/navbar";
import Project from "./components/ProjectShow/project";
import Skills from "./components/Skills/skills";

function App() {
  return (
    <div className="min-h-screen bg-blue-950 md:px-[200px] xl:px-82">
      <Navbar />
      <div className="flex flex-col gap-4 pt-28">
        <About />
        <Project />
        <Skills />
      </div>
    </div>
  );
}

export default App;
