import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import ImgUpload from "../pages/ImgUpload";

const Layout: React.FC = () => {
  return (
    <>
      {/* <Header /> */}
      {/* <ImgUpload /> */}
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
