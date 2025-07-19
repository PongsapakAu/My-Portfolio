import About from "./components/about";
import Contact from "./components/contact";
import Container from "./components/container";
import Education from "./components/education";
import Experience from "./components/experience";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Profile from "./components/profile";
import Project from "./components/ProjectShow/project";
import Skills from "./components/Skills/skills";

function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-gradient-to-b from-gray-900 via-gray-950 to-black font-sans text-gray-300">
      <Navbar />

      <Container className="mx-auto flex max-w-7xl flex-col gap-12 px-4 pt-28 pb-20 sm:px-6 lg:px-8">
        <Profile />

        <About />

        <Education />

        <Experience />

        <Project />

        <Skills />

        <Contact />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
