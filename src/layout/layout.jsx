import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Fotter";  // Fixing typo: 'Fotter' to 'Footer'
import Breadcrumb from "../components/BredCrumb";

const Layout = () => {
    return (
        <div className="flex flex-col min-h-[100dvh] poppins-regular"> {/* Allow full screen height */}
            <div className="sticky top-0 z-50 bg-white">
            <Header />
            </div>
            <main className="flex-grow bg-white overflow-y-auto px-24">
                <Breadcrumb />
                <Outlet />
            </main>
            <Footer />  {/* Footer will now come after content */}
        </div>
    );
};

export default Layout;
