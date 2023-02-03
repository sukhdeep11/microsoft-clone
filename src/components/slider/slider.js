import React from "react"

import Laptop from "../../assests/laptop.png"

export default function Slider(){
    return(
    <div className="md:flex">
        <div className="p-2 bg-[#f7f7f7] md:order-2">
            <img src={Laptop} alt="laptop"></img>
        </div>
        <div className="flex flex-col items-center bg-zinc-200 py-14 px-6 md:bg-[#f7f7f7] md:items-start md:order-1 justify-center md:pl-14 space-y-4">
            <h3 className="text-xl font-semibold ">Surface Laptop 4</h3>
            <p className="text-sm text-center md:text-left">Do it all with a perfect balance of sleek, ultra thin design, multitasking speed and improved performance</p>
            <button className="bg-zinc-900 my-2 cursor-pointer text-white text-sm py-2 px-4" >Shop now </button>
        </div>        
    </div>
    )
}