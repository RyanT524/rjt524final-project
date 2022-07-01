import "./index.scss"
import { Link } from 'react-router-dom'

const Projects = () => {

  return (
    <div className={"container about-page"}>
      <div className={"text-zone"}>
        <h1>
          Homework Projects
        </h1>
        <p>Homework 1: Created a single HTML page with a header, footer,
        and main elements. The header contains 3 tabs and the footer provides contact information</p>
        <Link to={"/projects/1"} className={"homeworkButton"}>HOMEWORK 1</Link>
        <p>Homework 2: Created a grid layout using React</p>
        <Link to={"/projects/2"} className={"homeworkButton"}>HOMEWORK 2</Link>
        <p>Homework 3: Explored creative coding using P5 in HTML</p>
        <Link to={"/projects/3"} className={"homeworkButton"}>HOMEWORK 3</Link>
        <p>Homework 4: Created a stock graph layout using D3 </p>
        <Link to={"/projects/4"} className={"homeworkButton"}>HOMEWORK 4</Link>
      </div>
    </div>
  )
}

export default Projects;