import React from "react";
import { RiAncientPavilionLine } from "react-icons/ri";
import { PiDiscordLogo } from "react-icons/pi";
import { FiYoutube } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";


function Footer() {
  return(
    
    <div className="flex  pl-[40px] pt-[40px] pr-[40px] pb-[195px] bg-[#3B3B3B] sm:w-[23.4375rem]">
     <div className="w-full">
     <div>
        <RiAncientPavilionLine className="w-8 h-8 text-[#A259FF]" />
        </div>
        <div> <h1 className="pt-1 px-2 text-white text-lg font-normal"> NFT Marketplace </h1></div>
        </div>
      
      <div> 
        <p> NFT marketplace UI created with anima for figma. </p>
        <p> Join our community </p>
      </div>

      <div>
        <span> <PiDiscordLogo /> </span>
        <span><FiYoutube /></span>
        <span><FiTwitter /></span>
        <span> <FiInstagram /></span>
      </div>
        
        </div>
    
  );
}

export default Footer;