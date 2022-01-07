import React from 'react'
import Image from 'next/image'
import articles from '../pages/api/articles'
import { motion } from 'framer-motion'



export default function Card(props) {
    return (
        <motion.div whileHover={{scale:1.1}}>
            <div className="card">
                {/* Image à la une */}
                <div className="card-image">
                    {/* <img src="https://damienflandrin.fr/storage/tutoriel-realiser-une-carte-en-css/card-image.jpg" alt="Image" /> */}
                    <Image src={props.img} alt='ímg' placeholder='blur' />
                </div>
                {/* Fin de l'image à la une  */}

                {/* <!-- Corp de notre carte --> */}
                <div className="card-body">

                    {/* <!-- Date de publication de l'article--> */}
                    <div className="card-date">
                        <time>{props.date}</time>
                    </div>

                    {/* <!-- Titre de l'article --> */}
                    <div className="card-title">
                        <div style={{fontWeight:300}}>{props.title}</div>
                    </div>
                    {/* <!-- Extrait de l'article --> */}
                    {/* <div className="card-excerpt">
                        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam voluptatibus autem consectetur voluptate facere at, omnis ab optio placeat officiis! Animi modi harum enim quia veniam consectetur unde autem inventore.</p>
                    </div> */}

                </div>
                {/* <!-- Fin du corp de notre carte --> */}
            </div>
        </motion.div>
        
    )
}



{/* <div className="card">
    <a href="https://www.damienflandrin.fr/blog/post/#">
        <!-- Image à la une -->
        <div className="card-image"><img src="https://damienflandrin.fr/storage/tutoriel-realiser-une-carte-en-css/card-image.jpg" alt="Orange" /></div>
        <!-- Fin de l'image à la une -->

        <!-- Corp de notre carte -->
        <div className="card-body">

            <!-- Date de publication de l'article-->
            <div className="card-date">
                <time>20 Novembre 1992</time>
            </div>

            <!-- Titre de l'article -->
            <div className="card-title">
                <h3>Lorem Ipsum</h3>
            </div>
            <!-- Extrait de l'article -->
            <div className="card-excerpt">
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam voluptatibus autem consectetur voluptate facere at, omnis ab optio placeat officiis! Animi modi harum enim quia veniam consectetur unde autem inventore.</p>
            </div>

        </div>
        <!-- Fin du corp de notre carte -->
    </a>
</div> */}