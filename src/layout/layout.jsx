import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Fotter";  // Fixed typo: 'Fotter' to 'Footer'

const Layout = () => {
  const location = useLocation();


  return (
    <div className="flex flex-col min-h-[100dvh] poppins-regular">
      <div className="sticky top-0 z-50 bg-white">
        <Header />
      </div>
      <main className="flex-grow bg-white overflow-y-auto px-30">
        <Outlet />
      </main>
      <Footer />  {/* Footer will now come after content */}
    </div>
  );
};

export default Layout;
