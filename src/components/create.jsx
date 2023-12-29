import React from "react";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";




function Create(){
  return(
    <>
    <diV className="text-white bg-[#2B2B2B] w-[23.4375rem]">
      <div className="px-8 pt-8 pb-2">
        <h1 className="flex justify-center font-bold"> Create Account </h1> <h1 className="flex justify-center font-normal"> wElcOme, enter YOur detaIls AND STArt CReaTing, cOlLECTION and SELLING NFTS. </h1>
      </div>

      <div className=" flex justify-center items-center p-2" >
        <div className="flex bg-white rounded-full pt-2 px-2">
        <FaRegUser  className="text-black "/>
        <input placeholder="useRNAMe" className=" px-2 rounded-full"/>
        </div>        
      </div>
      
      <div className=" flex justify-center items-center p-2" >
        <div className="flex bg-white rounded-full p-1">
        <MdOutlineMail  className="text-black "/>
        <input placeholder="email aDdreSS" className="px-2 rounded-full"/>
        </div>        
      </div>

    
      <div className=" flex justify-center items-center p-2" >
        <div className="flex bg-white rounded-full p-1">
        <RiLockPasswordLine  className="text-black "/>
        <input placeholder=" password" className="px-2 rounded-full"/>
        </div>        
      </div>


      <div className=" flex justify-center items-center p-2" >
        <div className="flex bg-white rounded-full p-1">
        <RiLockPasswordLine  className="text-black "/>
        <input placeholder="confirm PASSWORD" className="px-2 rounded-full"/>
        </div>        
      </div>

      <div className="flex justify-center pt-2 pb-4 "> 
        <button className="bg-[#A259FF] text-medium rounded-full px-12"> CREATE ACCOUNT </button>
      </div>
      

    </diV>
    </>
  );
}

export default Create;