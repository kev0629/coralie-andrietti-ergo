import React from "react";
import Image from "next/image";
import articles from "../pages/api/articles";
import { motion } from "framer-motion";

export default function Card(props) {
  return (
    <motion.div whileHover={{ scale: 1.1 }}>
      <div className="card">
        {/* Image à la une */}
        <div className="card-image">
          <Image src={props.img} fill alt="ímg" placeholder="blur" />
        </div>
        <div className="card-body">
          <div className="card-date">
            <time>{props.date}</time>
          </div>
          <div className="card-title">
            <div style={{ fontWeight: 300 }}>{props.title}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
