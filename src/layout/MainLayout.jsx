import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            {/* Navbar */}
            <Navbar />
            {/* Outlet */}
            <div className="min-h-[calc(100vh-232px)]">
                <Outlet />
            </div>
            {/* footer */}
            <Footer />
        </div>
    );
};

export default MainLayout;
