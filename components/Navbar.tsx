import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Link as ScrollLink } from "react-scroll";
import logo_title from "../public/pictures/Logo_title.png";

// Custom NavLink to handle smooth scroll on home page vs. regular links on other pages
interface NavLinkProps {
  to: string;
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ to, href, children }: NavLinkProps) => {
  const router = useRouter();
  const isHomePage = router.pathname === "/";

  const linkClasses =
    "relative text-gray-700 hover:text-primary font-medium py-2 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-primary after:transform after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100";
  const activeLinkClasses =
    "relative text-primary font-medium py-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-primary after:transform after:scale-x-100 after:origin-left";

  if (isHomePage) {
    return (
      <ScrollLink
        to={to}
        spy={true}
        smooth={true}
        duration={500}
        offset={-80}
        className={linkClasses}
        activeClass={activeLinkClasses}
      >
        {children}
      </ScrollLink>
    );
  }

  return (
    <Link href={href} legacyBehavior>
      <a className={linkClasses}>{children}</a>
    </Link>
  );
};

import { useModal } from "./ModalContext";

const Navbar = () => {
  const { toggleContactModal } = useModal();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "home", href: "/#home", label: "Présentation" },
    { to: "actu", href: "/#actu", label: "Actualités" },
    { to: "What", href: "/#What", label: "Qu'est-ce que c'est ?" },
    { to: "Who", href: "/#Who", label: "Pour qui ?" },
    { to: "When", href: "/#When", label: "Quand consulter ?" },
    { to: "Follow", href: "/#Follow", label: "Accompagnement" },
    { to: "Localisation", href: "/#Localisation", label: "Localisation" },
  ];

  const isHomePageTop = !isScrolled && router.pathname === "/";

  const navContainerClasses = `z-50 w-full transition-all duration-300 ${
    isHomePageTop ? "absolute" : "sticky top-0"
  }`;
  const navVisualClasses = `bg-gray-100/40 backdrop-blur-lg ${
    isScrolled ? "shadow-xl rounded-full" : ""
  }`;

  return (
    <nav className={`${navContainerClasses} ${navVisualClasses}`}>
      <div
        className={`flex justify-between items-center container mx-auto transition-all duration-500 ease-in-out ${
          isScrolled ? "mt-2 px-6 py-1" : "px-6 py-4"
        }`}
      >
        <Link href="/#home" legacyBehavior>
          <a className="cursor-pointer">
            <Image
              src={logo_title}
              width={150}
              height={45}
              alt="Coralie Andrietti logo"
              className="transition-all duration-500"
            />
          </a>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} href={link.href}>
              {link.label}
            </NavLink>
          ))}
          <button
            onClick={toggleContactModal}
            className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-dark transition-colors"
          >
            Me contacter
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-dark focus:outline-none"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Drawer) */}
      <div
        className={`md:hidden absolute top-0 left-0 w-full bg-white shadow-lg transition-transform duration-300 ease-in-out ${
          menuOpen ? "transform-none" : "-translate-y-full"
        }`}
      >
        <ul className="flex flex-col items-center space-y-6 p-8 pt-24">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} href={link.href}>
                <span onClick={() => setMenuOpen(false)} className="text-lg">
                  {link.label}
                </span>
              </NavLink>
            </li>
          ))}
          <li>
            <button
              onClick={() => {
                toggleContactModal();
                setMenuOpen(false);
              }}
              className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-dark transition-colors w-full"
            >
              Me contacter
            </button>
          </li>
        </ul>
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 text-dark focus:outline-none"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
