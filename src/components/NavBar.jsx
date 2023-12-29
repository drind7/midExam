import React from "react";
import { RiAncientPavilionLine } from "react-icons/ri";
import { RiBarChartHorizontalFill } from "react-icons/ri";
 


function Navbar(){
  return(
    
    <div >
      <nav className="sm:w-[23.44rem] md:w- lg:w- bg-[#2B2B2B] flex justify-between">
        <div className="flex">
        <div className="p-2 ">
        <RiAncientPavilionLine className="text-[#A259FF] w-8 h-8" />
        </div>
        <div> <h1 className="p-3 text-white text-xl font-semibold"> NFT Marketplace </h1></div>
        </div>
      <div className="flex p-2"> <RiBarChartHorizontalFill className="text-white text-sm w-8 h-8"/> </div>
      </nav>
    </div>
  );
}

export default Navbar;