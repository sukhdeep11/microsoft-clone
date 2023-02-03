import React from "react";
import CloudPc from "../../assests/cloudPc.webp"
import M365 from "../../assests/m365.webp"
import Teams from "../../assests/teams.webp"
import MViva from "../../assests/mViva.webp"

export default function Card2(){
    return(
        <div className="flex flex-col justify-center items-center md:flex-row md:items-start mb-12">
            <div className="w-64 m-4">
                <img className="w-full h-40" src={Teams} alt=""/>
                <h3 className="font-semibold text-base mt-6">Get Microsoft Teams for free</h3>
                <p className="text-sm">Welcome to your Windows 365 Cloud PC</p>
                <span className="text-sm text-blue-500 font-bold">Sign up for free</span>
            </div>

            <div className="w-64 m-4">
                <img className="w-full h-40" src={M365} alt=""/>
                <h3 className="font-semibold text-base mt-6">Try Microsoft 365 for free</h3>
                <p className="text-sm">Get Microsoft Teams, secure cloud storage and premium apps across devices with a free one-month Microsoft 365 Business Standard trial.</p>
                <span className="text-sm text-blue-500 font-bold">Start your free trial</span>
            </div>

            <div className="w-64 m-4">
                <img className="w-full h-40" src={MViva} alt=""/>
                <h3 className="font-semibold text-base mt-6">Microsoft Viva</h3>
                <p className="text-sm">Discover the employee experience platform designed to help people connect, focus, learn and thrive at work</p>
                <span className="text-sm text-blue-500 font-bold">Learn more</span>
            </div>

            <div className="w-64 m-4">
                <img className="w-full h-40" src={CloudPc} alt=""/>
                <h3 className="font-semibold text-base mt-6">Welcome to your Windows 365 Cloud PC</h3>
                <p className="text-sm">Securely stream your Windows experience from the Microsoft cloud to any device.</p>
                <span className="text-sm text-blue-500 font-bold">Get it today.</span>
            </div>

        </div>
    )
}