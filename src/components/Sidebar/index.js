import "./index.scss";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faEnvelope,
  faImage,
  faSignIn,
  faCalculator,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Sidebar() {
  return (
    <div className='nav-bar'>
      <Link className='logo' to='/'>
        <div className='circle'>
          <p className='circle-inner'>TH</p>
        </div>
      </Link>
      <nav>
        <NavLink exact='true' activeclass='active' to='/'>
          <FontAwesomeIcon icon={faHome} />
        </NavLink>
        <NavLink exact='true' activeclass='active' to='/about' className='about-link'>
          <FontAwesomeIcon icon={faUser} />
        </NavLink>
        <NavLink exact='true' activeclass='active' to='/contact' className='contact-link'>
          <FontAwesomeIcon icon={faEnvelope} />
        </NavLink>
        <NavLink exact='true' activeclass='active' to='/portfolio' className='portfolio-link'>
          <FontAwesomeIcon icon={faImage} />
        </NavLink>
        <NavLink exact='true' activeclass='active' to='/dashboard' className='dashboard-link'>
          <FontAwesomeIcon icon={faSignIn} />
        </NavLink>
        <NavLink exact='true' activeclass='active' to='/calculator' className='calculator-link'>
          <FontAwesomeIcon icon={faCalculator} />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a target='_blank' rel='noreferrer' href='https://www.linkedin.com'>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a target='_blank' rel='noreferrer' href='https://www.linkedin.com'>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
