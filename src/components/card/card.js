import React from "react";
import edge from "../../assests/edge.jpg"
import surfaceGo from "../../assests/surfaceGo.jpg"
import surfaceGo3 from "../../assests/surfaceGo3.jpg"
import xboxGames from "../../assests/xboxGames.jpg"

export default function Card(){
    return(
        <div className="flex flex-col justify-center items-center md:flex-row md:items-start">
            <div className="w-64 m-4">
                <img className="w-full h-40" src={surfaceGo} alt=""/>
                <h3 className="font-semibold text-base mt-6">Surface Lapton Go</h3>
                <p className="text-sm">Make the most of every day with the sleek size and performance of our lightest surface laptop</p>
                <span className="text-sm text-blue-500 font-bold">Shop now</span>
            </div>

            <div className="w-64 m-4">
                <img className="w-full h-40" src={surfaceGo3} alt=""/>
                <h3 className="font-semibold text-base mt-6">Surface Go 3</h3>
                <p className="text-sm">The most portable surface 2-in-1 is perfect for your everyday task, homework and play. Now avialable with windows 11.</p>
                <span className="text-sm text-blue-500 font-bold">Shop now</span>
            </div>

            <div className="w-64 m-4">
                <img className="w-full h-40" src={xboxGames} alt=""/>
                <h3 className="font-semibold text-base mt-6">Xbox Plus Game Ultimate</h3>
                <p className="text-sm">Get your first 8 months of subscription for $299. Plan on devices that you own. Includes EA play. Offer for new subscriber only and cannont be combined with any other offer.</p>
                <span className="text-sm text-blue-500 font-bold">Join now</span>
            </div>

            <div className="w-64 m-4">
                <img className="w-full h-40" src={edge} alt=""/>
                <h3 className="font-semibold text-base mt-6">Microsoft Edge</h3>
                <p className="text-sm">World class performance with more privacy more productivity more value while you browse</p>
                <span className="text-sm text-blue-500 font-bold">Download now</span>
            </div>

        </div>
    )
}