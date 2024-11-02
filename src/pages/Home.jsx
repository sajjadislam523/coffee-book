import React from "react";
import Banner from "../components/Banner";
import Heading from "../components/Heading";
import { Outlet, useLoaderData } from "react-router-dom";
import Categories from "../components/Categories";

const Home = () => {
    const categories = useLoaderData();

    return (
        <div>
            {/* Banner */}
            <Banner />
            {/* Heading */}
            <Heading
                title={"Browse Coffees by Category"}
                subTitle={
                    "Choose your desired coffee category to browse through specific coffees that fit in your taste."
                }
            />
            {/* Categories tab */}
            <Categories categories={categories} />
            {/* Dynamic nested component */}
            <Outlet />
        </div>
    );
};

export default Home;
