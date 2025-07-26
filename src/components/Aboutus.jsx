import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  useGSAP(() => {
    // Hero to About transition with morphing background
    const backgroundTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-section",
        start: "top bottom",
        end: "top top",
        scrub: 1,
      },
    });

    backgroundTl.fromTo(
      ".cosmic-gradient",
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, ease: "power2.out" }
    );

    // Staggered content reveal with 3D transforms
    gsap.fromTo(
      ".reveal-item",
      { 
        opacity: 0, 
        y: 100, 
        rotationX: -45,
        transformOrigin: "center bottom",
        filter: "blur(10px)"
      },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        filter: "blur(0px)",
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".about-content",
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Parallax floating orbs with trail effects
    gsap.to(".orb-1", {
      y: -150,
      x: 50,
      rotation: 360,
      scale: 1.2,
      duration: 3,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    gsap.to(".orb-2", {
      y: -100,
      x: -30,
      rotation: -180,
      scale: 0.8,
      duration: 4,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
      delay: 1,
    });

    gsap.to(".orb-3", {
      y: -200,
      x: 80,
      rotation: 270,
      scale: 1.5,
      duration: 5,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
      delay: 2,
    });

    // Stats with morphing numbers and glow effects
    const stats = document.querySelectorAll(".stat-number");
    stats.forEach((stat, index) => {
      const target = parseInt(stat.dataset.target);
      
      // Number counting animation
      gsap.fromTo(
        stat,
        { textContent: 0 },
        {
          textContent: target,
          duration: 2,
          ease: "power2.out",
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: stat,
            start: "top 85%",
            toggleActions: "play none none none",
            onStart: () => {
              // Add glow effect when counting starts
              gsap.to(stat, {
                textShadow: "0 0 20px rgba(255,255,255,0.8), 0 0 40px rgba(59,130,246,0.6)",
                duration: 0.5,
                yoyo: true,
                repeat: 3,
              });
            }
          },
        }
      );

      // Stat card hover effect with 3D transform
      const statCard = stat.closest('.stat-card');
      if (statCard) {
        statCard.addEventListener('mouseenter', () => {
          gsap.to(statCard, {
            rotationY: 5,
            rotationX: 5,
            scale: 1.05,
            z: 50,
            duration: 0.4,
            ease: "power2.out",
          });
        });

        statCard.addEventListener('mouseleave', () => {
          gsap.to(statCard, {
            rotationY: 0,
            rotationX: 0,
            scale: 1,
            z: 0,
            duration: 0.4,
            ease: "power2.out",
          });
        });
      }
    });

    // Mission/Vision cards with magnetic hover
    const cards = document.querySelectorAll('.content-card');
    cards.forEach(card => {
      card.addEventListener('mouseenter', (e) => {
        gsap.to(card, {
          scale: 1.02,
          rotationY: 2,
          z: 30,
          duration: 0.4,
          ease: "power2.out",
        });
        
        // Add particle effect
        gsap.to(card.querySelector('.card-glow'), {
          opacity: 1,
          scale: 1.1,
          duration: 0.3,
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          scale: 1,
          rotationY: 0,
          z: 0,
          duration: 0.4,
          ease: "power2.out",
        });
        
        gsap.to(card.querySelector('.card-glow'), {
          opacity: 0,
          scale: 1,
          duration: 0.3,
        });
      });
    });

    // Core values with ripple effects
    const valueCards = document.querySelectorAll('.value-card');
    valueCards.forEach((card, index) => {
      // Entrance animation with delay
      gsap.fromTo(card, 
        { 
          opacity: 0, 
          y: 80,
          scale: 0.8,
          filter: "blur(5px)"
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "back.out(1.7)",
          delay: index * 0.2,
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Interactive hover with ripple
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          y: -10,
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out",
        });
        
        // Icon rotation
        gsap.to(card.querySelector('.value-icon'), {
          rotation: 360,
          scale: 1.2,
          duration: 0.6,
          ease: "power2.out",
        });

        // Ripple effect
        gsap.to(card.querySelector('.ripple'), {
          scale: 4,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
        
        gsap.to(card.querySelector('.value-icon'), {
          rotation: 0,
          scale: 1,
          duration: 0.4,
          ease: "power2.out",
        });

        // Reset ripple
        gsap.set(card.querySelector('.ripple'), {
          scale: 0,
          opacity: 0.3,
        });
      });
    });

    // Text reveal with typewriter effect for key phrases
    gsap.fromTo(".typewriter-text",
      { width: 0, opacity: 0 },
      {
        width: "100%",
        opacity: 1,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".typewriter-text",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="about-section relative min-h-screen bg-black text-white overflow-hidden">
      {/* Cosmic background with morphing gradients */}
      <div className="cosmic-gradient absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-950/20 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-purple-950/10 to-transparent"></div>
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent via-black/60 to-black"></div>
      </div>
      
      {/* Advanced floating orbs with trails */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="orb-1 absolute top-1/4 left-1/6 w-6 h-6 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-sm">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/60 to-purple-400/60 rounded-full animate-pulse"></div>
        </div>
        <div className="orb-2 absolute top-1/3 right-1/4 w-8 h-8 bg-gradient-to-r from-white/20 to-blue-300/30 rounded-full blur-sm">
          <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-blue-300/50 rounded-full animate-pulse"></div>
        </div>
        <div className="orb-3 absolute bottom-1/3 left-1/3 w-4 h-4 bg-gradient-to-r from-purple-300/40 to-pink-300/30 rounded-full blur-sm">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-300/60 to-pink-300/50 rounded-full animate-pulse"></div>
        </div>
        
        {/* Constellation lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <line x1="16.66%" y1="25%" x2="33.33%" y2="66.66%" stroke="url(#grad1)" strokeWidth="0.5"/>
          <line x1="75%" y1="33.33%" x2="33.33%" y2="66.66%" stroke="url(#grad1)" strokeWidth="0.5"/>
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(59,130,246,0.3)" />
              <stop offset="100%" stopColor="rgba(147,51,234,0.3)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="about-content text-center">
          {/* Section Title with reveal effect */}
          <div className="reveal-item mb-8">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              About Axentis
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
          </div>
          
          {/* Subtitle with typewriter effect */}
          <div className="reveal-item mb-20">
            <div className="typewriter-text overflow-hidden whitespace-nowrap mx-auto max-w-5xl">
              <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
                We are a forward-thinking consulting firm dedicated to transforming businesses 
                through strategic innovation and technological excellence.
              </p>
            </div>
          </div>

          {/* Mission/Vision with enhanced cards */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 mb-24">
            <div className="content-card relative text-left p-8 bg-gradient-to-br from-white/5 to-transparent rounded-2xl backdrop-blur-sm border border-white/10 reveal-item">
              <div className="card-glow absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 blur-xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Our Mission
                  </h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  To empower organizations with cutting-edge solutions that drive sustainable growth 
                  and competitive advantage in an ever-evolving digital landscape.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  We believe in the power of strategic thinking combined with innovative technology 
                  to unlock new possibilities for our clients.
                </p>
              </div>
            </div>

            <div className="content-card relative text-left p-8 bg-gradient-to-br from-white/5 to-transparent rounded-2xl backdrop-blur-sm border border-white/10 reveal-item">
              <div className="card-glow absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl opacity-0 blur-xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Our Vision
                  </h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  To be the trusted partner that organizations turn to when they need to navigate 
                  complex challenges and seize emerging opportunities.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  We envision a future where businesses thrive through intelligent adaptation 
                  and strategic foresight.
                </p>
              </div>
            </div>
          </div>

          {/* Enhanced Stats with 3D cards */}
          <div className="reveal-item mb-24">
            <h3 className="text-2xl md:text-3xl font-bold mb-12 text-white">
              Our Impact in Numbers
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: 150, label: "Projects Completed", icon: "📊" },
                { number: 50, label: "Happy Clients", icon: "🤝" },
                { number: 5, label: "Years Experience", icon: "⭐" },
                { number: 24, label: "Countries Served", icon: "🌍" }
              ].map((stat, index) => (
                <div key={index} className="stat-card relative p-6 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300">
                  <div className="text-4xl mb-3">{stat.icon}</div>
                  <div className="stat-number text-3xl md:text-4xl font-bold text-white mb-2" data-target={stat.number}>
                    0
                  </div>
                  <p className="text-gray-400 text-sm uppercase tracking-wider font-medium">
                    {stat.label}
                  </p>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Values with ripple effects */}
          <div className="reveal-item">
            <h3 className="text-3xl md:text-4xl font-bold mb-16 text-white">
              What Drives Us Forward
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Innovation",
                  description: "Pushing boundaries with creative solutions that challenge conventional thinking.",
                  icon: "M13 10V3L4 14h7v7l9-11h-7z",
                  gradient: "from-blue-500 to-cyan-500"
                },
                {
                  title: "Excellence",
                  description: "Delivering exceptional quality in every project through meticulous attention to detail.",
                  icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                  gradient: "from-purple-500 to-pink-500"
                },
                {
                  title: "Partnership",
                  description: "Building lasting relationships based on trust, transparency, and mutual success.",
                  icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                  gradient: "from-emerald-500 to-teal-500"
                }
              ].map((value, index) => (
                <div key={index} className="value-card relative text-center group cursor-pointer p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300">
                  <div className="ripple absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl scale-0 opacity-30"></div>
                  
                  <div className={`value-icon w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center shadow-lg shadow-black/50`}>
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={value.icon} />
                    </svg>
                  </div>
                  
                  <h4 className="text-xl font-bold mb-4 text-white">{value.title}</h4>
                  <p className="text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;