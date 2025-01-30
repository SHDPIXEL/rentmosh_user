import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Fotter";
import Breadcrumb from "../components/BredCrumb";

const Layout = () => {
    return (
        <div className="flex flex-col h-[100dvh] poppins-regular">
            <Header />
            <main className="flex-grow bg-white overflow-y-auto px-24">
                <Breadcrumb />
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};
export default Layout;