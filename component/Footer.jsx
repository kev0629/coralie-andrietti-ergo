import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo_title from '../public/pictures/Logo_title.png';
import { Link as ScrollLink } from 'react-scroll';
import { useRouter } from 'next/router';

const FooterNavLink = ({ to, href, label }) => {
    const router = useRouter();
    const isHomePage = router.pathname === '/';

    if (isHomePage) {
        return (
            <ScrollLink
                to={to}
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
                className="text-gray-400 hover:text-white transition-colors duration-300"
            >
                {label}
            </ScrollLink>
        );
    }

    return (
        <Link href={href} legacyBehavior>
            <a className="text-gray-400 hover:text-white transition-colors duration-300">
                {label}
            </a>
        </Link>
    );
};

export default function Footer() {
    const navLinks = [
        { to: 'home', href: '/#home', label: 'Présentation' },
        { to: 'actu', href: '/#actu', label: 'Actualités' },
        { to: "What", href: "/#What", label: "Qu'est-ce que c'est ?" },
        { to: 'Who', href: '/#Who', label: 'Pour qui ?' },
        { to: 'When', href: '/#When', label: 'Quand consulter ?' },
        { to: 'Follow', href: '/#Follow', label: 'Accompagnement' },
        { to: 'Localisation', href: '/#Localisation', label: 'Localisation' },
    ];

  return (
    <footer className="bg-dark text-light">
      <div className="mx-auto py-12 px-6 text-center">
        
        {/* Logo */}
        <div className="flex justify-center mb-6">
            <Link href="/#home" legacyBehavior>
              <a>
                <Image
                  src={logo_title}
                  width={200}
                  height={60}
                  alt="Logo Coralie Andrietti"
                />
              </a>
            </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8">
            {navLinks.map(link => (
                <FooterNavLink key={link.to} to={link.to} href={link.href} label={link.label} />
            ))}
        </nav>

        {/* Contact Info */}
        <div className="mb-8 space-y-2 text-gray-300">
            <div>
                <a href="mailto:coralie.andrietti@gmail.com" className="hover:text-white transition-colors">coralie.andrietti@gmail.com</a>
                <span className="text-gray-500 mx-3">•</span>
                <a href="tel:0664436260" className="hover:text-white transition-colors">06 64 43 62 60</a>
            </div>
            <div>
                <p>5 Chemin de Garibondy, 06110 Le Cannet</p>
            </div>
        </div>

        {/* Copyright and Credits */}
        <div className="border-t border-gray-800 pt-8">
            <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Coralie Andrietti. Tous droits réservés.</p>
            <p className="text-xs text-gray-600 mt-1">
                Site réalisé par <a href="https://www.linkedin.com/in/kevin-saffioti/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Kevin Saffioti</a>
            </p>
        </div>

      </div>
    </footer>
  );
}
