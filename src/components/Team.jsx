import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Team = () => {
  const [activeTeamMember, setActiveTeamMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Sarah Chen",
      position: "Chief Executive Officer",
      department: "Leadership",
      bio: "Visionary leader with 15+ years in strategic consulting and digital transformation. Sarah has guided Fortune 500 companies through complex organizational changes and technological innovations.",
      expertise: ["Strategic Planning", "Digital Transformation", "Change Management", "Executive Leadership"],
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/20 to-cyan-500/20",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sarah@axentis.com"
      }
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      position: "Chief Technology Officer",
      department: "Technology",
      bio: "Technology innovator specializing in AI, machine learning, and cloud architecture. Marcus leads our technical vision and ensures cutting-edge solutions for every client engagement.",
      expertise: ["AI & Machine Learning", "Cloud Architecture", "Software Development", "Cybersecurity"],
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/20 to-pink-500/20",
      social: {
        linkedin: "#",
        github: "#",
        email: "marcus@axentis.com"
      }
    },
    {
      id: 3,
      name: "Emma Thompson",
      position: "Head of Strategy",
      department: "Strategy",
      bio: "Strategic mastermind with expertise in market analysis and business model innovation. Emma transforms complex challenges into actionable growth strategies for our clients.",
      expertise: ["Market Analysis", "Business Strategy", "Innovation Management", "Growth Planning"],
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-500/20 to-teal-500/20",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "emma@axentis.com"
      }
    },
    {
      id: 4,
      name: "David Kim",
      position: "Senior Consultant",
      department: "Operations",
      bio: "Process optimization expert with a track record of improving operational efficiency by 40%+ across diverse industries. David brings analytical rigor to every engagement.",
      expertise: ["Process Optimization", "Data Analytics", "Operational Excellence", "Automation"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      gradient: "from-orange-500 to-amber-500",
      bgGradient: "from-orange-500/20 to-amber-500/20",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "david@axentis.com"
      }
    },
    {
      id: 5,
      name: "Lisa Wang",
      position: "Creative Director",
      department: "Design",
      bio: "Design thinking pioneer who bridges the gap between user experience and business strategy. Lisa ensures our solutions are both functional and beautifully crafted.",
      expertise: ["UX/UI Design", "Design Thinking", "Brand Strategy", "User Research"],
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      gradient: "from-rose-500 to-pink-500",
      bgGradient: "from-rose-500/20 to-pink-500/20",
      social: {
        linkedin: "#",
        dribbble: "#",
        email: "lisa@axentis.com"
      }
    },
    {
      id: 6,
      name: "Ahmed Hassan",
      position: "Growth Strategist",
      department: "Growth",
      bio: "International expansion specialist with deep expertise in emerging markets. Ahmed has helped companies successfully enter 25+ new markets across 4 continents.",
      expertise: ["Market Expansion", "International Strategy", "Partnership Development", "Scaling Operations"],
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      gradient: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-500/20 to-purple-500/20",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "ahmed@axentis.com"
      }
    }
  ];

  useGSAP(() => {
    // Title entrance with morphing effect
    gsap.fromTo(
      ".team-title",
      { 
        opacity: 0, 
        y: 120,
        rotationX: -90,
        transformOrigin: "center bottom",
        filter: "blur(20px)"
      },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        filter: "blur(0px)",
        duration: 1.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".team-section",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Team cards with advanced 3D entrance
    gsap.fromTo(
      ".team-card",
      { 
        opacity: 0, 
        y: 200,
        rotationY: -45,
        rotationX: 30,
        scale: 0.7,
        filter: "blur(15px)"
      },
      {
        opacity: 1,
        y: 0,
        rotationY: 0,
        rotationX: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 1.4,
        ease: "power3.out",
        stagger: {
          amount: 1.2,
          from: "start"
        },
        scrollTrigger: {
          trigger: ".team-grid",
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Floating elements in background
    gsap.to(".team-float", {
      y: -40,
      x: "random(-30, 30)",
      rotation: "random(-90, 90)",
      duration: "random(4, 7)",
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
      stagger: {
        each: 0.4,
        from: "random"
      }
    });

    // Interactive hover effects for team cards
    const teamCards = document.querySelectorAll('.team-card');
    teamCards.forEach((card, index) => {
      const member = teamMembers[index];
      
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          scale: 1.08,
          rotationY: 8,
          rotationX: 5,
          z: 100,
          duration: 0.5,
          ease: "power2.out",
        });
        
        // Profile image zoom and glow
        gsap.to(card.querySelector('.profile-image'), {
          scale: 1.15,
          duration: 0.4,
          ease: "power2.out",
        });

        // Glow effect
        gsap.to(card.querySelector('.card-glow'), {
          opacity: 1,
          scale: 1.1,
          duration: 0.3,
        });

        // Expertise tags animation
        gsap.to(card.querySelectorAll('.expertise-tag'), {
          y: -5,
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out",
          stagger: 0.05
        });

        // Bio reveal
        gsap.to(card.querySelector('.bio-section'), {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          scale: 1,
          rotationY: 0,
          rotationX: 0,
          z: 0,
          duration: 0.5,
          ease: "power2.out",
        });
        
        gsap.to(card.querySelector('.profile-image'), {
          scale: 1,
          duration: 0.4,
          ease: "power2.out",
        });

        gsap.to(card.querySelector('.card-glow'), {
          opacity: 0,
          scale: 1,
          duration: 0.3,
        });

        gsap.to(card.querySelectorAll('.expertise-tag'), {
          y: 0,
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
          stagger: 0.05
        });

        gsap.to(card.querySelector('.bio-section'), {
          opacity: 0,
          y: 10,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="team-section relative min-h-screen bg-gradient-to-b from-black via-gray-900/30 to-black text-white overflow-hidden">
      {/* Dynamic background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/30 via-transparent to-purple-950/30"></div>
        
        {/* Floating geometric shapes */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="team-float absolute opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 20 + 10}px`,
              height: `${Math.random() * 20 + 10}px`,
            }}
          >
            <div className="w-full h-full bg-gradient-to-br from-white/30 to-blue-400/30 rounded-full blur-sm"></div>
          </div>
        ))}

        {/* Abstract network lines */}
        <svg className="absolute inset-0 w-full h-full opacity-5">
          <defs>
            <linearGradient id="networkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(59,130,246,0.4)" />
              <stop offset="50%" stopColor="rgba(147,51,234,0.4)" />
              <stop offset="100%" stopColor="rgba(236,72,153,0.4)" />
            </linearGradient>
          </defs>
          <path d="M 0,300 Q 400,200 800,300 T 1600,300" stroke="url(#networkGrad)" strokeWidth="2" fill="none"/>
          <path d="M 0,500 Q 600,400 1200,500 T 2400,500" stroke="url(#networkGrad)" strokeWidth="1" fill="none"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="team-title">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                Meet Our Team
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl md:text-2xl text-gray-300 font-light max-w-4xl mx-auto leading-relaxed">
              Exceptional minds united by a shared vision of transforming businesses 
              through strategic innovation and unparalleled expertise.
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <div className="team-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="team-card relative group cursor-pointer perspective-1000"
              onMouseEnter={() => setActiveTeamMember(member.id)}
              onMouseLeave={() => setActiveTeamMember(null)}
            >
              {/* Card Glow Effect */}
              <div className={`card-glow absolute inset-0 bg-gradient-to-br ${member.bgGradient} rounded-3xl opacity-0 blur-2xl transition-all duration-500`}></div>
              
              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 rounded-3xl backdrop-blur-sm border border-white/20 overflow-hidden transform-gpu">
                {/* Profile Section */}
                <div className="relative p-8 text-center">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className={`absolute inset-0 bg-gradient-to-br ${member.bgGradient}`}></div>
                  </div>

                  {/* Profile Image */}
                  <div className="relative mb-6 inline-block">
                    <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} rounded-full blur-md opacity-60`}></div>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="profile-image relative w-24 h-24 lg:w-28 lg:h-28 rounded-full object-cover border-4 border-white/20 shadow-2xl"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} rounded-full opacity-20`}></div>
                  </div>

                  {/* Basic Info */}
                  <div className="relative z-10">
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
                      {member.name}
                    </h3>
                    <p className={`text-base font-semibold bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent mb-2`}>
                      {member.position}
                    </p>
                    <p className="text-gray-400 text-sm uppercase tracking-wider mb-6">
                      {member.department}
                    </p>

                    {/* Expertise Tags */}
                    <div className="flex flex-wrap justify-center gap-2 mb-6">
                      {member.expertise.slice(0, 2).map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className={`expertise-tag px-3 py-1 text-xs font-medium bg-gradient-to-r ${member.gradient} bg-opacity-20 rounded-full border border-white/20 text-white`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Bio Section (Hidden by default, shown on hover) */}
                    <div className="bio-section opacity-0 transform translate-y-2 transition-all duration-300">
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {member.bio}
                      </p>
                      
                      {/* All Expertise */}
                      <div className="flex flex-wrap justify-center gap-1 mb-4">
                        {member.expertise.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-2 py-1 text-xs bg-white/10 rounded-md text-gray-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-4 mt-4">
                      {Object.entries(member.social).map(([platform, url]) => (
                        <a
                          key={platform}
                          href={url}
                          className={`w-8 h-8 bg-gradient-to-r ${member.gradient} rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-200`}
                        >
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                            {platform === 'linkedin' && (
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            )}
                            {platform === 'twitter' && (
                              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                            )}
                            {platform === 'email' && (
                              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                            )}
                            {platform === 'github' && (
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            )}
                            {platform === 'dribbble' && (
                              <path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.626 0 12 0zm9.568 5.302c.847 1.015 1.348 2.326 1.348 3.698 0 .289-.025.572-.068.85-.717-.154-2.121-.154-3.42.12-.154-.383-.308-.767-.513-1.135 1.402-.631 2.653-1.533 2.653-1.533zm-1.568-2.7c-1.127 1.015-2.326 1.533-3.698 1.533-.847 0-1.663-.205-2.359-.547-.051-.017-.102-.034-.154-.051C14.766 1.533 15.996 0 17.688 0c1.127 0 2.121.41 2.881 1.069-.41.51-.785 1.035-1.069 1.533zm-7.449 6.268c-.821-.103-1.619-.257-2.395-.462.051-.308.137-.615.257-.923.923.205 1.879.257 2.87.205.103.231.188.463.308.694-.359.154-.718.308-1.04.486zm-3.42-2.035c.615.137 1.244.257 1.891.359-.137.615-.205 1.244-.205 1.891 0 .103.017.205.017.308-.923-.103-1.828-.188-2.717-.291C9.188 7.688 9.62 6.268 10.131 4.835zm-.103 6.12c.821.051 1.663.137 2.488.188-.154.718-.359 1.419-.615 2.103-.923-.205-1.828-.462-2.717-.769.308-.513.564-1.035.844-1.522zm2.717 3.317c.257-.718.462-1.453.615-2.205.821-.051 1.663-.137 2.488-.257-.154.718-.359 1.419-.615 2.103-.821.103-1.647.205-2.488.359zm3.42.359c.256-.684.462-1.385.615-2.103.821.103 1.647.188 2.488.257-.154.718-.359 1.419-.615 2.103-.821-.051-1.647-.137-2.488-.257zm3.42-1.244c-.821-.051-1.663-.137-2.488-.188.154-.718.359-1.419.615-2.103.923.205 1.828.462 2.717.769-.308.513-.564 1.035-.844 1.522zm-3.934-5.302c-.821.103-1.619.257-2.395.462-.051-.308-.137-.615-.257-.923.923-.205 1.879-.257 2.87-.205-.103.231-.188.463-.218.666z"/>
                            )}
                          </svg>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${member.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center justify-center p-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full">
            <button className="px-8 py-4 bg-black rounded-full text-white font-semibold hover:bg-gray-900 transition-all duration-300 transform hover:scale-105">
              Join Our Team
            </button>
          </div>
          <p className="text-gray-400 mt-4 text-lg">
            Ready to make an impact? We're always looking for exceptional talent.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;