import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";

export default function Body(props) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <main className="flex-grow mx-auto py-8">
        <div className="bg-white shadow-sm p-8">{props.children}</div>
      </main>
      <Footer />
    </div>
  );
}
