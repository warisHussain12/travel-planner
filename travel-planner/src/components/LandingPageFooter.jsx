// LandingPageFooter.jsx
import React from "react";
import { FiHome } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { IoMdAdd, IoMdAddCircleOutline } from "react-icons/io";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { RiAddLargeFill } from "react-icons/ri";
const LandingPageFooter = () => {
  return (
    <div className="sticky bottom-0 bg-white shadow-md p-3">
      <div className="flex flex-row justify-between items-center px-3">
        <FiHome className="text-2xl text-[#313DDF]" />
        <CiSearch className="text-2xl" />
        <RiAddLargeFill className="text-2xl text-[#313DDF] font-bolder" />
        <MdOutlineFavoriteBorder className="text-2xl" />
        <CgProfile className="text-2xl" />
      </div>
    </div>
  );
};

export default LandingPageFooter;
