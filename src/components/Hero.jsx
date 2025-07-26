import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useGSAP(() => {
    // Set initial states
    gsap.set(".hero-background", { 
      yPercent: 0,
      scale: 1.1, // Slight scale for smoother parallax
    });
    
    gsap.set(".floating-elements", {
      opacity: 0,
      y: 100,
    });

    // Enhanced initial animation with staggered entrance
    const tl = gsap.timeline({ delay: 0.3 });
    
    tl.fromTo(
      ".hero-title",
      { opacity: 0, y: 80, rotationX: 90 },
      { 
        opacity: 1, 
        y: 0, 
        rotationX: 0, 
        duration: 1.2, 
        ease: "power3.out" 
      }
    )
    .fromTo(
      ".hero-subtitle",
      { opacity: 0, y: 50, scale: 0.8 },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        duration: 1, 
        ease: "power2.out" 
      },
      "-=0.6"
    )
    .fromTo(
      ".hero-cta",
      { opacity: 0, y: 30, scale: 0.9 },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        duration: 0.8, 
        ease: "back.out(1.7)" 
      },
      "-=0.4"
    )
    .to(
      ".floating-elements",
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
        stagger: 0.2
      },
      "-=1"
    );

    // Enhanced parallax timeline
    const parallaxTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "bottom center",
        scrub: 1, // Smooth scrolling with slight lag
        anticipatePin: 1,
      },
    });

    // Multi-layer parallax effects
    parallaxTimeline
      .to(".hero-background", {
        yPercent: 50,
        scale: 1.3,
        ease: "none",
      })
      .to(
        ".hero-content",
        {
          yPercent: -20,
          ease: "none",
        },
        0
      )
      .to(
        ".floating-elements",
        {
          yPercent: -30,
          opacity: 0.7,
          ease: "none",
        },
        0
      )
      .to(
        ".hero-overlay",
        {
          opacity: 0.8,
          ease: "none",
        },
        0
      );

    // Floating animation for decorative elements
    gsap.to(".floating-1", {
      y: -20,
      duration: 3,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    gsap.to(".floating-2", {
      y: -15,
      x: 10,
      duration: 4,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
      delay: 1,
    });

    gsap.to(".floating-3", {
      y: -25,
      x: -5,
      duration: 5,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
      delay: 2,
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-section overflow-hidden">
      {/* Enhanced Background with proper CSS properties */}
      <div
        className="absolute inset-0 hero-background will-change-transform"
        style={{
          backgroundImage: "url('/assets/images/space_bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 hero-overlay bg-black/50" />

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 floating-elements pointer-events-none">
        <div className="floating-1 absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full blur-sm" />
        <div className="floating-2 absolute top-1/3 right-1/3 w-3 h-3 bg-blue-300/40 rounded-full blur-sm" />
        <div className="floating-3 absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-purple-300/50 rounded-full blur-sm" />
        <div className="floating-1 absolute top-2/3 right-1/4 w-2.5 h-2.5 bg-white/20 rounded-full blur-sm" />
      </div>

      {/* Main Content */}
      <div className="relative z-10  text-white px-6 md:px-12 max-w-4xl mx-auto hero-content will-change-transform">
        <h1 className="hero-title text-4xl md:text-6xl font-medium mb-4 leading-tight text-white">
          Empowering Your Future
        </h1>
        
        <p className="hero-subtitle text-lg md:text-xl max-w-2xl mb-8 leading-relaxed font-light text-gray-200">
          Axentis Consulting delivers strategic solutions to drive your business
          forward with expertise, innovation, and trust.
        </p>
        
        <div className="hero-cta">
          <a
            href="#contact"
            className="inline-block bg-white text-black px-8 py-3 rounded-md text-lg uppercase tracking-wider font-medium hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
          >
            Get Started
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;