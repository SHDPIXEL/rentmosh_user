import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Fotter";

const Layout = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-[100dvh] poppins-regular">
      <div className="sticky top-0 z-50 bg-white">
        <Header />
      </div>
      <main className="flex-grow bg-white overflow-y-auto max-w-[1600px] w-full mx-auto lg:px-30">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
