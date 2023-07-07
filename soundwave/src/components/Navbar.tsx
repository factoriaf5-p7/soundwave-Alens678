import logo from '../assets/logo.png';
import {Link } from "react-router-dom";

export const Navbar=()=> {
  return (
    <div>
      <nav>
        <ul>
          <li>
          <Link to="/">
            <img src={logo} height="20" width="20" alt="logo" />
            <h6>Soundwave</h6>
          </Link>             
          </li>
          <li>
            <Link to="/discover" >Discover</Link>
          </li>
          <li>
          <Link to="/join">Join</Link>
          </li>
        </ul>
        
      </nav>
    </div>
  )
}

