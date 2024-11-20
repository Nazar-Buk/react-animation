import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">
        <b>React Animation Pack</b>
      </div>
      <nav>
        <ul className="menu">
          <Link to="/">
            <li className="menu-item">
              <i class="material-icons">home</i> <span>Home</span>
            </li>
          </Link>

          <Link to="/waves">
            <li className="menu-item">
              <i class="material-icons">waves</i> Waves
            </li>
          </Link>
          <li className="menu-item">
            <i class="material-icons">apartment</i> Item2
          </li>
          <li className="menu-item">
            <i class="material-icons">apartment</i> Item3
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
