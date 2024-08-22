import { useState } from "react"
import Header from "./components/Header"
import HeroMessage from "./components/HeroMessage"
import ProjectCard from "./components/ProjectCard"
import "./global.scss"
import { projects } from "./utils/data"
import About from "./components/About"


function App() {
const [page, setPage]= useState<string>("Home");

  return (
    <>
      <Header setPage={setPage}/>
      {page === "Home" &&
      <>
        <HeroMessage /><div className="mainContainer">
            {projects.map((item, index) => <ProjectCard {...item} key={index} />)}
          </div>
      </>
      }
      {page === "About" && <>
      <About />
      </>
      }
    </>
  )
}

export default App
