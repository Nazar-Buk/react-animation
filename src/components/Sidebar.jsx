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
              <span class="material-symbols-outlined">home</span> Home
            </li>
          </Link>
          <Link to="/waves">
            <li className="menu-item">
              <span class="material-symbols-outlined">waves</span> Waves
            </li>
          </Link>
          <Link to="/waves-logo">
            <li className="menu-item">
              <span class="material-symbols-outlined">waves</span> Waves Logo
            </li>
          </Link>
          <Link to="/slider-cube">
            <li className="menu-item">
              <span class="material-symbols-outlined">deployed_code</span> Cube
              Slider
            </li>
          </Link>
          <li className="menu-item">
            <span class="material-symbols-outlined">apartment</span> Item2
          </li>
          <li className="menu-item">
            <span class="material-symbols-outlined">apartment</span> Item3
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
