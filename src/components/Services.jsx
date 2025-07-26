import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 0,
      title: "Strategic Consulting",
      subtitle: "Transform Your Vision",
      description: "Comprehensive strategic planning and business transformation services that align your organization with future opportunities and market dynamics.",
      features: [
        "Market Analysis & Competitive Intelligence",
        "Business Model Innovation",
        "Digital Transformation Strategy",
        "Organizational Change Management"
      ],
      icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      bgGradient: "from-blue-500/20 via-cyan-500/10 to-teal-500/20"
    },
    {
      id: 1,
      title: "Technology Solutions",
      subtitle: "Innovation at Scale",
      description: "Cutting-edge technology implementations and digital solutions that streamline operations and accelerate growth in the digital age.",
      features: [
        "Custom Software Development",
        "Cloud Infrastructure & Migration",
        "AI & Machine Learning Integration",
        "Cybersecurity & Risk Management"
      ],
      icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      bgGradient: "from-purple-500/20 via-pink-500/10 to-rose-500/20"
    },
    {
      id: 2,
      title: "Process Optimization",
      subtitle: "Efficiency Redefined",
      description: "Data-driven process improvements and operational excellence initiatives that maximize efficiency and reduce costs across your organization.",
      features: [
        "Workflow Analysis & Redesign",
        "Automation Implementation",
        "Performance Metrics & KPIs",
        "Continuous Improvement Programs"
      ],
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      gradient: "from-emerald-500 via-green-500 to-lime-500",
      bgGradient: "from-emerald-500/20 via-green-500/10 to-lime-500/20"
    },
    {
      id: 3,
      title: "Growth Advisory",
      subtitle: "Scale with Confidence",
      description: "Strategic growth planning and market expansion services designed to help organizations scale sustainably and capture new opportunities.",
      features: [
        "Market Entry Strategy",
        "Partnership Development",
        "Investment & Funding Guidance",
        "Scalability Planning"
      ],
      icon: "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z",
      gradient: "from-orange-500 via-amber-500 to-yellow-500",
      bgGradient: "from-orange-500/20 via-amber-500/10 to-yellow-500/20"
    }
  ];

  useGSAP(() => {
    // Title entrance with splitting effect
    gsap.fromTo(
      ".services-title",
      { 
        opacity: 0, 
        y: 100,
        rotationX: -90,
        transformOrigin: "center bottom"
      },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Service cards staggered entrance
    gsap.fromTo(
      ".service-card",
      { 
        opacity: 0, 
        y: 150,
        scale: 0.8,
        rotationY: -30,
        filter: "blur(10px)"
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotationY: 0,
        filter: "blur(0px)",
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Floating particles animation
    gsap.to(".particle", {
      y: -30,
      x: "random(-20, 20)",
      rotation: "random(-180, 180)",
      duration: "random(3, 5)",
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
      stagger: {
        each: 0.3,
        from: "random"
      }
    });

    // Active service spotlight effect
    const updateSpotlight = (index) => {
      gsap.to(".service-spotlight", {
        x: `${index * 25}%`,
        duration: 0.8,
        ease: "power3.out"
      });
    };

    // Enhanced hover effects for service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          scale: 1.05,
          rotationY: 5,
          z: 50,
          duration: 0.4,
          ease: "power2.out",
        });
        
        // Glow effect
        gsap.to(card.querySelector('.card-glow'), {
          opacity: 1,
          scale: 1.2,
          duration: 0.3,
        });

        // Icon animation
        gsap.to(card.querySelector('.service-icon'), {
          rotation: 360,
          scale: 1.1,
          duration: 0.6,
          ease: "power2.out",
        });

        // Feature list animation
        gsap.to(card.querySelectorAll('.feature-item'), {
          x: 10,
          duration: 0.3,
          ease: "power2.out",
          stagger: 0.05
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

        gsap.to(card.querySelector('.service-icon'), {
          rotation: 0,
          scale: 1,
          duration: 0.4,
          ease: "power2.out",
        });

        gsap.to(card.querySelectorAll('.feature-item'), {
          x: 0,
          duration: 0.3,
          ease: "power2.out",
          stagger: 0.05
        });
      });
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="services-section relative min-h-screen bg-gradient-to-b from-black via-gray-900/50 to-black text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-transparent to-purple-950/20"></div>
        
        {/* Floating particles */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="particle absolute w-2 h-2 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}

        {/* Geometric shapes */}
        <div className="absolute top-1/4 right-1/6 w-32 h-32 border border-white/5 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-1/4 left-1/8 w-24 h-24 border border-blue-500/10 rotate-45" style={{ animation: 'pulse 4s infinite' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="services-title">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                Our Services
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl md:text-2xl text-gray-300 font-light max-w-4xl mx-auto leading-relaxed">
              Comprehensive solutions designed to accelerate your business transformation 
              and unlock unprecedented growth opportunities.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="services-grid grid md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="service-card relative group cursor-pointer"
              onMouseEnter={() => setActiveService(index)}
            >
              {/* Card Glow Effect */}
              <div className={`card-glow absolute inset-0 bg-gradient-to-br ${service.bgGradient} rounded-3xl opacity-0 blur-xl transition-all duration-300`}></div>
              
              {/* Main Card */}
              <div className="relative p-8 lg:p-10 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-500 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                </div>

                {/* Service Icon */}
                <div className={`service-icon inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br ${service.gradient} rounded-2xl mb-6 shadow-2xl shadow-black/50`}>
                  <svg className="w-8 h-8 lg:w-10 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} />
                  </svg>
                </div>

                {/* Service Content */}
                <div className="relative z-10">
                  <div className="mb-4">
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className={`text-lg font-medium bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                      {service.subtitle}
                    </p>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="feature-item flex items-center text-gray-200">
                        <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-4 flex-shrink-0`}></div>
                        <span className="text-sm lg:text-base">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="mt-8">
                    <button className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-black/30 transition-all duration-300 transform hover:scale-105 group`}>
                      Learn More
                      <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center justify-center p-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full">
            <button className="px-8 py-4 bg-black rounded-full text-white font-semibold hover:bg-gray-900 transition-all duration-300 transform hover:scale-105">
              Explore All Services
            </button>
          </div>
          <p className="text-gray-400 mt-4 text-lg">
            Ready to transform your business? Let's discuss your unique challenges.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;