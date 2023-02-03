import React from "react"
import { BsWindows,BsLaptop } from "react-icons/bs";
import { FaXbox } from "react-icons/fa";

export default function Feature(){
    return (
        <div className="space-y-4 m-8 md:flex md:space-y-0 md:justify-around mx-16">
           <div className="flex items-center space-x-2 md:flex-col">
            <BsWindows className="md:text-3xl"/>
            <p className="text-sm font-semibold md:mt-2 md:text-3">Choose your Microsoft 360</p>
           </div>
           <div className="flex items-center space-x-2 md:flex-col">
           <FaXbox className="md:text-3xl"/>
            <p className="text-sm font-semibold md:mt-2">Buy Xbox Games</p>
           </div>
           <div className="flex items-center space-x-2 md:flex-col">
           <BsLaptop className="md:text-3xl"/>
            <p className="text-sm font-semibold md:mt-2">Explore Surface Device</p>
           </div>
           <div className="flex items-center space-x-2 md:flex-col">
           <BsWindows className="md:text-3xl"/>
           <p className="text-sm font-semibold md:mt-2">Get Windows 11</p>
           </div>
        </div>
    )
}