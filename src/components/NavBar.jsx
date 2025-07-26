import { useGSAP } from "@gsap/react";
import React, { useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { title: "Home", id: "home", href: "#home" },
    { title: "About", id: "about", href: "#about" },
    { title: "Services", id: "services", href: "#services" },
    { title: "Partners", id: "partners", href: "#partners" },
  ];

  useGSAP(() => {
    // Simple blur and transparency on scroll
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "100px top",
        toggleActions: "play none none reverse",
      },
    });

    navTween.fromTo(
      ".navbar",
      {
        backgroundColor: "rgba(0, 0, 0, 0)",
        backdropFilter: "blur(0px)",
      },
      {
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        backdropFilter: "blur(20px)",
        duration: 0.6,
        ease: "power2.out",
      }
    );

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <nav 
      className="navbar fixed top-0 left-0 w-full z-50 text-white font-sans transition-all duration-300 ease-out" 
      role="navigation"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        {/* Enhanced Logo */}
        <a 
          href="#" 
          className="logo text-2xl md:text-3xl font-bold tracking-tight hover:text-white transition-all duration-300"
        >
          <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Axentis
          </span>
        </a>

        {/* Modern Desktop Menu */}
        <ul className="hidden md:flex items-center gap-1">
          {menuItems.map((item, index) => (
            <li key={item.id}>
              <a
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium tracking-wide hover:text-white transition-all duration-300 group rounded-lg hover:bg-white/10"
              >
                {item.title}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-white to-gray-300 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </a>
            </li>
          ))}
          
          {/* Enhanced CTA Button */}
          <li className="ml-4">
            <a
              href="#contact"
              className="relative inline-flex items-center justify-center bg-white/90 backdrop-blur-sm text-black px-6 py-2.5 rounded-md text-sm font-semibold tracking-wide hover:bg-white hover:shadow-lg hover:shadow-white/25 transition-all duration-300 transform hover:scale-105 border border-white/20"
            >
              Contact Us
              <svg 
                className="ml-2 w-4 h-4 transform transition-transform duration-200 group-hover:translate-x-0.5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </li>
        </ul>

        {/* Modern Hamburger Menu */}
        <button
          className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center focus:outline-none group"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span 
            className={`block w-6 h-0.5 bg-white transition-all duration-300 transform ${
              isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}
          ></span>
          <span 
            className={`block w-6 h-0.5 bg-white mt-1 transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          ></span>
          <span 
            className={`block w-6 h-0.5 bg-white mt-1 transition-all duration-300 transform ${
              isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}
          ></span>
        </button>
      </div>

      {/* Enhanced Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-out backdrop-blur-xl bg-black/80 border-t border-white/10 ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col py-6 px-6">
          {menuItems.map((item, index) => (
            <li key={item.id} className="py-3 border-b border-white/10 last:border-b-0">
              <a
                href={item.href}
                className="block text-lg font-medium tracking-wide hover:text-white hover:translate-x-2 transition-all duration-300 hover:bg-white/5 px-4 py-2 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.title}
              </a>
            </li>
          ))}
          <li className="pt-6">
            <a
              href="#contact"
              className="flex items-center justify-center bg-white/90 text-black px-6 py-3 rounded-md font-semibold tracking-wide hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
              <svg 
                className="ml-2 w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;