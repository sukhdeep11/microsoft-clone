import React from "react"
import fData from "../../fdata"

const dispLink = (links) => {
    
return links.map((val,index)=>{
    return <li className="list-none py-1 text-xs" key={index}>{val}</li>
})
}

export default function Footer(){
    return(
    <div> 
        <div className="bg-[#f2f2f2] py-8 px-6 md:flex md:justify-around">

        
            {fData.map((val,index)=>{
                return(
                    
                    <div className="" key={index}>
                        <h3 className="font-semibold text-[#616161] py-5">{val.header}</h3>
                                                            {dispLink(val.links)}
                       
                    </div>
                    
                ) 
            })}
          
            

        </div>    
    </div>
    )
}