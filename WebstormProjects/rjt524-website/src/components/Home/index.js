import { Link } from 'react-router-dom'
import './index.scss';

const Home = () => {

  return (
    <div className={"container home-page"}>
      <div className={"text-zone"}>
        <h1>Hi, <br /> I'm Ryan Tabor</h1>
        <h2>I am currently a Computer Science student at Virginia Tech. I am proficient in a variety of
        programming languages, such as C, Java, Python, HTML, and JavaScript.</h2>
        <img src={"https://via.placeholder.com/150"} alt={"placeholder"} />
        <br />
        <Link to={"/contact"} className={"flat-button"}>CONTACT ME</Link>
      </div>
    </div>
  )
}

export default Home;