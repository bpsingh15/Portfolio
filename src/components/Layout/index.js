import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import "./index.scss";

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        {/* Top tags */}
        <span className="tags top-tags html">&lt;/html&gt;</span>
        <span className="tags top-tags body">&lt;/body&gt;</span>

        <Outlet />

        {/* Bottom tags */}
        <span className="tags bottom-tags body">&lt;/body&gt;</span>
        <span className="tags bottom-tags html">&lt;/html&gt;</span>
      </div>
    </div>
  );
};

export default Layout;
