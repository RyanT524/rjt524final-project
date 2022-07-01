import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from "../../assets/images/logo-s.png"
import LogoSubtitle from "../../assets/images/logo_sub.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faProjectDiagram, faUser } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => (
  <div className={"nav-bar"}>
    <Link className={"logo"} to={''}>
    </Link>
    <nav>
      <NavLink exact="true" activeClassName={"active"} to={"/"}>
        <FontAwesomeIcon icon={faHome} color ="#4d4d4e" />
      </NavLink>
      <NavLink exact="true" activeClassName={"active"} className={"about-link"} to={"/projects"}>
        <FontAwesomeIcon icon={faProjectDiagram} color ="#4d4d4e" />
      </NavLink>
      <NavLink exact="true" activeClassName={"active"} className={"contact-link"} to={"/contact"}>
        <FontAwesomeIcon icon={faEnvelope} color ="#4d4d4e" />
      </NavLink>
    </nav>
  </div>
)

export default Sidebar