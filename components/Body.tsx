import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";

interface BodyProps {
  children: React.ReactNode;
}

export default function Body({ children }: BodyProps) {
  return (
    <div className="relative flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <main className="flex-grow mx-auto">
        <div className="bg-white shadow-sm">{children}</div>
      </main>
      <Footer />
    </div>
  );
}