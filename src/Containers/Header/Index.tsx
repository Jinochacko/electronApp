import { Link } from "react-router-dom";
export default function Header(){
    return (
        <nav className="navbar fixed-top navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            bezKoder
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/"} className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/employees"} className="nav-link">
                Employees
              </Link>
            </li>
          </div>
        </nav>
    );
}