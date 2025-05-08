import React from "react";
import tokyo2 from "../assets/tokyo2.webp";
import { GoArrowUpRight } from "react-icons/go";

function LandingPage() {
  return (
    <div className="min-h-screen p-3">
      <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 max-w-full">
        <div>
          <h1 className="font-bold text-2xl">Hello Chhavi!</h1>
          <p className="">Ready for the trip?</p>
        </div>
        <div className="flex justify-end items-center pr-3">
          <div className="flex items-center justify-center w-12 h-12 bg-[#FF7339] text-white text-2xl rounded-full">
            <span className="font-200">C</span>
          </div>
        </div>
      </div>
      <div>
        <h2 className="pt-3">Your Upcoming Trip</h2>
        <div className="relative pt-2">
          <div className="">
            <img
              className="rounded-lg w-full h-auto"
              src={tokyo2}
              alt="Tokyo Tower"
            />
          </div>
          <div className="absolute top-0 left-0 p-5 w-full">
            <div className="flex flex-row justify-between items-start">
              <h1 className="text-white text-3xl sm:text-5xl font-extrabold tracking-wider">
                TOKYO
              </h1>
              <GoArrowUpRight className="text-white text-xl sm:text-2xl mt-2" />
            </div>
            <p className="text-white">27.01.2025 - 02.02.2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
