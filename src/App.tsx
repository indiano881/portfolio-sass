import Header from "./components/Header"
import HeroMessage from "./components/HeroMessage"
import ProjectCard from "./components/ProjectCard"
import "./global.scss"
import { projects } from "./utils/data"


function App() {
  

  return (
    <>
      <Header />
      <HeroMessage />
      <div className="mainContainer">
        {projects.map((item, index)=> <ProjectCard {...item} key={index}/>)}
      </div>
    </>
  )
}

export default App
