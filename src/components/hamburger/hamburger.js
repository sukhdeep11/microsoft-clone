import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

export default function Hamburger(props){
        if (props.curHam) {
            return (
            <div className="flex items-center space-x-3 md:hidden cursor-pointer" onClick={props.toggleNav}>
                <div>
                    <div className="h-0.5 w-6 my-1 bg-black"></div>
                    <div className="h-0.5 w-6 my-1 bg-black"></div>
                    <div className="h-0.5 w-6 my-1 bg-black"></div>
                </div>
            <div className="md:hidden"><AiOutlineSearch/></div>
            </div>
            )
        } else {
            return (
                <div className="flex items-center space-x-3 md:hidden cursor-pointer" onClick={props.toggleNav}>
                    <RxCross1 className="text-2xl"/>
                <div className="md:hidden" onClick={props.toggleNav}><AiOutlineSearch/></div>
                </div>
                )
        }


}