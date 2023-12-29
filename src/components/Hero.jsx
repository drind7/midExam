import React from "react";
import hero from "../assets/hero.jpeg";


function Hero() {
  return(
    <>
    <div className="flex w-[23.4375rem]"> 
    <img src={hero}/>
      {/* <img src="https://hdqwalls.com/wallpapers/astronaut-galaxy-space-stars-digital-art-4k-hs.jpg"/> */}
   
    </div>
    </>
  );
}

export default Hero;