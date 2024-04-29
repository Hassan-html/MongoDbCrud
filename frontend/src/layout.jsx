import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <>
      <Nav />
      <Toaster position="top-left" reverseOrder={false} />
      <Outlet />
    </>
  );
};

export default Layout;
