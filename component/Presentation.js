import React from "react";
import Image from "next/image";

export default function Presentation(){
    return(
        <div className='centered-content'>
            <div className="profile-pic" style={{height: "auto"}}>
                <Image  
                    //blurDataURL='"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAdEAACAQQDAAAAAAAAAAAAAAAAAQQCAwUSBjGR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAwT/xAAWEQEBAQAAAAAAAAAAAAAAAAABABL/2gAMAwEAAhEDEQA/AJiFyamPaW+Mj3KEutmn6ABVaXJf/9k="'
                    src='/../public/pictures/0.jpeg'
                    alt='coralie Andrietti'
                    width={175}
                    height={203}
                    //placeholder='blur'
                    />
            </div>
            <div>
                <Image 
                    src='/../public/pictures/Coralie_ergo_tittle.svg'
                    alt='title coralie ergo'
                    width={200}
                    height={100} 
                    priority
                    />
            </div>
            <div>
                <button type="button" name="myButton" className='button'>Mon Parcours</button>
            </div>
            <div style={{marginBottom:"25px",marginTop:"25px"}}>
                <div>Séance sur RDV</div>
                <div>En cabinet ou à domicile</div>
            </div>
            <div style={{marginBottom:"25px",marginTop:"25px"}}>
                <div>Résidence l’Estérel</div>
                <div> Bat A 100 chemin de l’Olivet</div>
                <div>06110 Le Cannet </div>
            </div>
            <div style={{marginBottom:"25px",marginTop:"25px"}}>coralie.andrietti@gmail.com 06.64.43.62.60</div>
        </div>
    )
}