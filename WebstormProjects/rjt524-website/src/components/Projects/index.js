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
        and main elements and pulled data from the NASA APOD API.</p>
        <Link to={"/projects/1"} className={"homeworkButton"}>HOMEWORK 1</Link>
        <p>Homework 2: Created a basic grid layout using React.</p>
        <Link to={"/projects/2"} className={"homeworkButton"}>HOMEWORK 2</Link>
        <p>Homework 3: Explored creative coding using P5 by editing a flocking algorithm.</p>
        <Link to={"/projects/3"} className={"homeworkButton"}>HOMEWORK 3</Link>
        <p>Homework 4: Created a stock graph layout that pulls from a JSON file using D3. </p>
        <Link to={"/projects/4"} className={"homeworkButton"}>HOMEWORK 4</Link>
      </div>
    </div>
  )
}

export default Projects;