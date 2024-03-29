import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import React, { Children } from "react";
import styles from "../styles/Home.module.css";

export default function Body(props) {
  return (
    <>
      <main className={styles.main}>
        <Navbar />
        <div className="container">
          {props.children}
          <div className="bottom-section"></div>
        </div>
        <Footer />
      </main>
    </>
  );
}
