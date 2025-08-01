import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";

export default function Body(props) {
  return (
    <div className="relative flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <main className="flex-grow mx-auto">
        <div className="bg-white shadow-sm">{props.children}</div>
      </main>
      <Footer />
    </div>
  );
}
