import { Link } from "react-router-dom";
import "./styles.css";

function Nav() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Personajes </Link>   
        </li>
        <li>
          <Link to="/Locations">Ubicaciones </Link>
        </li>
        <li>
          <Link to="/Episodes">Episodios </Link>
        </li>
      </ul>
    </>
  );
}

export default Nav;
