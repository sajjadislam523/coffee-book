import React from "react";

const Heading = ({ title, subTitle }) => {
    return (
        <div className="flex flex-col items-center justify-center w-full gap-4 my-12">
            <h1 className="text-xl font-thin md:text-2xl lg:text-4xl">
                {title}
            </h1>
            <p className="text-xs font-thin text-center text-gray-600 md:text-base">
                {subTitle}
            </p>
        </div>
    );
};

export default Heading;
