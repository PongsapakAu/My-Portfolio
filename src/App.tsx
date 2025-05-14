import About from "./components/about"
import Navbar from "./components/navbar"
import Project from "./components/project"


function App() {


  return (
    <div className="min-h-screen bg-linear-to-r from-zinc-800 to-black/88 xl:px-[200px] md:px-[200px] ">
      <Navbar />
      <div className="pt-28 flex flex-col gap-8">
      <About />
      <Project />
      </div>
     
    </div>
  )
}

export default App
