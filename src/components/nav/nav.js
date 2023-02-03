import React, { useState } from "react";
import Hamburger from "../hamburger/hamburger";
import { VscAccount } from "react-icons/vsc";
import { BsCart } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";

const imgSrc="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31";



export default function Nav(){
    const [ham,setHam]= useState(true)

    const toggleNav=()=> {
        return ham ? setHam(false) : setHam(true)
        }

    
    return (
        <div className="flex justify-between items-center space-x-3 p-4">
            <Hamburger toggleNav={toggleNav} curHam={ham}/>
            <div className="md:order-1 flex ">
                <img src={imgSrc} className="w-24 self-center" alt="logo" ></img>
                <div className={`absolute top-12 left-0 w-screen bg-gray-100 md:flex md:relative md:w-auto md:bg-white md:top-0 ${ham ?"hidden" : "block"}`}>
                    <div className="border-b md:border-0 border-gray-200 p-3 cursor-pointer">Microsoft 365</div>
                    <div className="border-b md:border-0 border-gray-200 p-3 cursor-pointer">Office</div>
                    <div className="border-b md:border-0 border-gray-200 p-3 cursor-pointer">Windows</div>
                    <div className="border-b md:border-0 border-gray-200 p-3 cursor-pointer">Surface</div>
                    <div className="border-b md:border-0 border-gray-200 p-3 cursor-pointer">Xbox</div>
                    <div className="border-b md:border-0 border-gray-200 p-3 cursor-pointer">Support</div>
                </div>
            </div>
            <div className="flex space-x-3 md:order-2" >
                <div className=""><BsCart/></div>
                <div className=""><VscAccount/></div>
                <div className="md:order-3 hidden md:block"><AiOutlineSearch/></div>
            </div>
        </div>        
    )
}