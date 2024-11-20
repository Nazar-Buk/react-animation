import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const Root = () => {
  return (
    <div className="wrapper-root">
      <Sidebar />
      <div className="container wrap-root-content">
        <Header />
        <div className="wrap-page">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Root;
