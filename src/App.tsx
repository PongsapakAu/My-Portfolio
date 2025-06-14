import About from "./components/about";
import Container from "./components/container";
import Education from "./components/education";
import Experience from "./components/experience";
import Navbar from "./components/navbar";
import Profile from "./components/profile";
import Project from "./components/ProjectShow/project";
import Skills from "./components/Skills/skills";

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-300 font-sans scroll-smooth">
      <Navbar />

      {/* ส่วนหลักของเนื้อหา */}
      <Container className="flex flex-col gap-16 pt-28 pb-16 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <Profile />
        <About />
        <Education />
        <Experience />
        <Project />
        <Skills />
      </Container>
    </div>
  );
}

export default App;
