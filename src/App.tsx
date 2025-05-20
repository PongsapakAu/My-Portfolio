import About from "./components/about";
import Container from "./components/container";
import Education from "./components/education";
import Navbar from "./components/navbar";
import Profile from "./components/profile";
import Project from "./components/ProjectShow/project";
import Skills from "./components/Skills/skills";

function App() {
  return (
    <div className="min-h-screen bg-blue-950 md:px-[200px] xl:px-82">
      <Navbar />

      <Container className="flex flex-col gap-4 py-4 pt-28">
        <Profile />
        <About />
        <Education />
        <Project />
        <Skills />
      </Container>
    </div>
  );
}

export default App;
