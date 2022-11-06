import React from "react";
import bg from '../assets/background.jpg'
const Hero = () => {
    return (
        <div className="w-[95%] mx-auto p-4">
            <div className="relative max-h-[500px]">
                <div className="absolute w-full  h-full max-h-[500px] text-gray-200 bg-black/50 flex flex-col justify-center">
                    <h1 className="px-4 text-4xl sm:5xl md:text-6xl lg:text-7xl font-bold">The <span className="text-orange-500">Best</span></h1>
                    <h1 className="px-4 text-4xl sm:5xl md:text-6xl lg:text-7xl font-bold"><span className="text-orange-500">Foods </span>Delivered</h1>
                </div>
                <img src={bg} alt="/" className="w-full max-h-[500px] object-cover" />
            </div>
        </div>
    );
}

export default Hero;