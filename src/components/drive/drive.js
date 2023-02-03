import React from "react";
import Driv from "../../assests/drive.png"

export default function Drive(){
    return(
        <div className="md:flex">
        <div className="md:order-2">
            <img src={Driv} alt="laptop"></img>
        </div>
        <div className="flex flex-col items-center py-14 px-6 bg-[#e7e7e7] md:items-start md:order-1 justify-center md:pl-14 space-y-4">
            <h3 className="text-xl font-semibold ">Outlook for iOS and Android</h3>
            <p className="text-sm text-center md:text-left">Streamline your workday with your email and calendar all in one integrated app</p>
            <button className="bg-zinc-900 my-2 cursor-pointer text-white text-sm py-2 px-4" >Download now </button>
        </div>        
    </div>
    )
}