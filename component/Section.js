import React, { Children } from "react";

export default function Section (props) {
    return(
        <div className="section">
            <div className="title-section">
               {props.title}
               <div className='under-title'></div>
            </div>
            <p className='text-section'>
                {props.children}
            </p>
            
        </div>
    )
}