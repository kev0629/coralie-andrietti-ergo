import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import React from "react";

export default function Body(props) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-sm p-8">
            {props.children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
