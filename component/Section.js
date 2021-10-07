import React, { Children } from "react";

export default function Section (props) {
    let bar;
    if (props.title!==undefined) {
        bar = <div className='under-title'></div>
        console.log(props.title)
        console.log(bar)
    }
    return(
        <div className="section" id={props.id}>
            <div className="title-section">
               {props.title}
               {bar}
            </div>
                <div className='section-content'>
                    {props.children}
                </div>
        </div>
    )
}