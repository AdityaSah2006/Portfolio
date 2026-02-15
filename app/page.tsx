'use client';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleMouseMove = (e: any) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0', 'scale-100');
            entry.target.classList.remove('opacity-0', 'translate-y-20', 'scale-95');
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#fdf9ec] via-[#ffffff] to-[#a99797] overflow-x-hidden relative">
  
  {/* Simple Animated Wave Test */}
  {/* Dark Animated Wave */}
<div className="fixed inset-0 pointer-events-none z-0">
  <div 
    className="absolute bottom-0 left-0 w-full h-64 opacity-30"
    style={{
      transform: `translateY(${scrollY * -0.3}px)`,
      background: 'linear-gradient(to top, rgba(139,92,246,0.4), rgba(236,72,153,0.3), transparent)',
    }}
  ></div>
  
  <div 
    className="absolute top-0 left-0 w-full h-64 opacity-25"
    style={{
      transform: `translateY(${scrollY * 0.2}px)`,
      background: 'linear-gradient(to bottom, rgba(249,115,22,0.3), rgba(239,68,68,0.2), transparent)',
    }}
  ></div>
  
  <div 
    className="absolute top-1/3 left-0 w-96 h-96 rounded-full blur-3xl opacity-20"
    style={{
      background: 'radial-gradient(circle, rgba(139,92,246,0.6) 0%, transparent 70%)',
      transform: `translate(${scrollY * 0.2}px, ${scrollY * 0.3}px)`,
    }}
  ></div>
  
  <div 
    className="absolute bottom-1/3 right-0 w-96 h-96 rounded-full blur-3xl opacity-20"
    style={{
      background: 'radial-gradient(circle, rgba(236,72,153,0.6) 0%, transparent 70%)',
      transform: `translate(${-scrollY * 0.15}px, ${-scrollY * 0.25}px)`,
    }}
  ></div>
</div>
  
  {/* Your content wrapper */}
  <div className="relative z-10"> 
      
      {/* Enhanced Navigation */}
      <nav className="fixed top-0 w-full bg-gradient-to-r from-rose-400 to-amber-200/70 backdrop-blur-2xl shadow-sm z-50 border-b border-black-400">
        <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
          <h2 className="text-3xl font-bold">
            <span className="bg-gradient-to-r from-orange-900 via-red-900 to-purple-900 bg-clip-text text-transparent">
              A.S
            </span>
          </h2>
          <div className="hidden md:flex gap-12 items-center">
            {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="text-gray-900 hover:text-gray-900 transition-all duration-300 relative group text-base font-medium"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-rose-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            {/* Social Icons in Nav */}
            <div className="flex gap-4 ml-4">
              <a href="https://www.linkedin.com/feed/" className="text-gray-700 hover:text-gray-900 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="https://github.com/zzcsv2n8yf-afk" className="text-gray-700 hover:text-gray-900 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="https://x.com/Adityakumasah" className="text-gray-700 hover:text-gray-900 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Photo */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
        {/* Animated gradient blobs */}
        {/* Your Photo */}
                
                  
                
        <div 
          className="absolute w-[600px] h-[600px] rounded-full blur-3xl opacity-5"
          style={{
            background: 'linear-gradient(135deg, #FFE5E5 0%, #E5F3FF 50%, #F5E5FF 100%)',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            top: '10%',
            right: '10%',
          }}
        ></div>
        <div 
          className="absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-5"
          style={{
            background: 'linear-gradient(135deg, #ea580c 0%, #dc2626 50%, #7e22ce 100%)',
            transform: `translate(${-mousePosition.x * 0.015}px, ${-mousePosition.y * 0.015}px)`,
            bottom: '15%',
            left: '10%',
          }}
        ></div>

        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left Side - Text Content */}
          <div>
            <div className="mb-8 inline-block">
              <span className="px-5 py-2 bg-gradient-to-r from-amber-400 to-rose-400/80 backdrop-blur-sm border border-gray-200 rounded-full text-sm text-gray-700 shadow-sm font-medium">
                👋 Welcome to my portfolio
              </span>
            </div>
            
            <h1 className="text-7xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="text-gray-800 font- block text-4xl mb-2">Hello, I'm</span>
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent">
                Aditya Sah
              </span>
            </h1>
            
            <p className="text-2xl text-gray-600 mb-4 font-light leading-relaxed">
              B.Tech CSE Student specializing in <span className="font-semibold text-gray-900">Artificial Intelligence</span>
            </p>
            <p className="text-xl text-gray-500 mb-10">
              Building intelligent solutions with IoT & Machine Learning
            </p>
            
            <div className="flex gap-5">
              <a 
  href="https://drive.google.com/file/d/1t1qgjfFaHEJ6ld-jx5x5B3ASmi0osavM/view?usp=share_link" 
  download="https://drive.google.com/file/d/1t1qgjfFaHEJ6ld-jx5x5B3ASmi0osavM/view?usp=share_link"
  target="_blank"
  rel="noopener noreferrer"
  className="group px-10 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1 text-base font-medium"
>
  Download CV
</a>
              <a 
                href="#contact" 
                className="px-10 py-4 bg-gradient-to-r from-amber-400 to-rose-400 border border-orange-400 text-gray-900 rounded-full hover:border-gray-900 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-base font-medium flex items-center gap-2"
              >
                Contact Me
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            <div className="mt-16 flex gap-8">
              <div>
                <p className="text-4xl font-bold text-gray-900">5+</p>
                <p className="text-sm text-gray-600 mt-1">Technologies</p>
              </div>
              <div className="h-12 w-px bg-gray-200"></div>
              <div>
                <p className="text-4xl font-bold text-gray-900">1+</p>
                <p className="text-sm text-gray-600 mt-1">Projects</p>
              </div>
              <div className="h-12 w-px bg-gray-200"></div>
              <div>
                <p className="text-4xl font-bold text-gray-900">Open</p>
                <p className="text-sm text-gray-600 mt-1">For Work</p>
              </div>
            </div>
          </div>

          {/* Right Side - Photo with MacBook Mockup */}
          <div className="relative">
            {/* Layered cards effect in background */}
            <div className="absolute inset-0 transform rotate-6 scale-95">
              <div className="w-full h-[500px] bg-gradient-to-br from-amber-400 to-rose-400 rounded-3xl shadow-2xl"></div>
            </div>
            <div className="absolute inset-0 transform -rotate-3 scale-97">
              <div className="w-full h-[500px] bg-gradient-to-br from-blue-00 to-blue-800 rounded-3xl shadow-2xl"></div>
            </div>
            
            {/* Main photo container */}
            <div className="relative bg-purplr rounded-3xl shadow-2xl overflow-hidden p-10">
              <div className="bg-gradient-to-br from-white-00 to-rose-00 rounded-2xl h-[500px] flex items-center justify-center relative overflow-hidden">
                {/* Placeholder for your photo - Replace this */}
                <div className="text-center">
                  <div className="w-64 h-64 rounded-full mb-4 mx-auto overflow-hidden border-3 border- shadow-2xl">
                    <img 
                      src="/profile.jpg" 
                      alt="Aditya Sah" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-white/50 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 left-4 w-32 h-32 bg-white/50 rounded-full blur-2xl"></div>
              </div>
            </div>

            {/* Floating badge */}
            <a 
  href="https://www.linkedin.com/feed/" 
  target="_blank"
  rel="noopener noreferrer"
  className="absolute -bottom-6 -left-6 bg-gray-50 border border-orange-400 rounded-2xl shadow-2xl p-6 border border-gray-100 hover:shadow-3xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
>
  <div className="flex items-center gap-3">
    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
    <p className="font-semibold text-gray-900 group-hover:text-gray-600 transition-colors">Available for Internships</p>
    <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  </div>
</a>
          </div>
        </div>
      </section>

      {/* About Section - Redesigned */}
      <section 
        id="about" 
        ref={sectionsRef.current[0]}
        className="min-h-screen flex items-center justify-center px-6 py-32 opacity-0 translate-y-20 scale-95 transition-all duration-1000"
      >
        <div className="max-w-7xl w-full">
          <div className="text-center mb-20">
            <span className="px-6 py-2 bg-gradient-to-r from-amber-400 to-rose-400 rounded-full text-sm text-gray-700 inline-block mb-4">
              About Me
            </span>
            <h2 className="text-6xl font-bold text-gray-900">Who I Am</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="relative">
              {/* Stacked cards effect */}
              <div className="space-y-6">
                <a 
  href="http://www.ipu.ac.in/usict/" 
  target="_blank"
  rel="noopener noreferrer"
  className="block bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
>
  <div className="flex items-start gap-4">
    <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-rose-400 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
      <span className="text-2xl">🎓</span>
    </div>
    <div>
      <h3 className="font-bold text-xl text-gray-900 mb-2 flex items-center gap-2 group-hover:text-amber-600 transition-colors">
        Education
        <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </h3>
      <p className="text-gray-600 font-medium">B.Tech in Computer Science & Engineering</p>
      <p className="text-gray-500 text-sm mt-1">University School of ICT • 2nd Year (4th Sem)</p>
      <p className="text-gray-500 text-sm">Specialization in Artificial Intelligence</p>
    </div>
  </div>
</a>

                <div className="bg-red rounded-2xl p-8 shadow-xl transform hover:-translate-y-2 transition-all duration-300 ml-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-purple-400 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">💡</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-900 mb-2">Focus Areas</h3>
                      <p className="text-gray-600">Internet of Things & Machine Learning</p>
                      <p className="text-gray-500 text-sm mt-1">Creating intelligent, data-driven solutions</p>
                    </div>
                  </div>
                </div>

                
                

                <a 
  href="https://www.coursera.org/partners/ibm-skills-network?network=x&utm_source=gg&creativeid=&extensionid=&matchtype=&gad_campaignid=21104990591&adgroupid=&gclid=CjwKCAiA-sXMBhAOEiwAGGw6LLLLSe6J0F4CgzJfJOU0mY61AS79e5imhqXhqAp48c4J9U0UGmpYjxoCUGgQAvD_BwE&keyword=&gbraid=0AAAAADdKX6bZZm_aimgk0Qxcx3GvUVPQM&placement=&assetgroupid=6544944776&utm_campaign=b2c_india_x_multi_ftcof_career-academy_cx_dr_bau_gg_pmax_gc_in_all_m_hyb_24-03_desktop&campaignid=21104989118&targetid=&gad_source=1&devicemodel=&utm_medium=sem&device=c&isNewUser=true" 
  target="_blank"
  rel="noopener noreferrer"
  className="block bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ml-8 cursor-pointer group"
>
  <div className="flex items-start gap-4">
    <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-amber-400 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
      <span className="text-2xl">🏆</span>
    </div>
    <div>
      <h3 className="font-bold text-xl text-gray-900 mb-2 flex items-center gap-2 group-hover:text-blue-600 transition-colors">
        Certifications
        <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </h3>
      <p className="text-gray-600 font-medium">IBM Course Completion Certificates</p>
      <div className="flex gap-2 mt-2">
        <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-xs font-semibold border border-blue-200 group-hover:bg-blue-100 transition-colors">IBM Certified</span>
      </div>
    </div>
  </div>
</a>


https://skills.yourlearning.ibm.com/profile/your-profile

                <div className="bg-red rounded-2xl p-8 shadow-xl transform hover:-translate-y-2 transition-all duration-300 ml-16">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">👥</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-900 mb-2">Tech Communities</h3>
                      <p className="text-gray-600 font-medium">Active Member</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-lg text-xs font-semibold border border-purple-200">ACM</span>
                        <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-lg text-xs font-semibold border border-indigo-200">IEEE</span>
                      </div>
                    </div>
                  </div>
                </div>

                <a 
  href="https://music.apple.com/us/new" 
  target="_blank"
  rel="noopener noreferrer"
  className="block bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ml-8 cursor-pointer"
>
  <div className="flex items-start gap-4">
    <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-rose-400 rounded-xl flex items-center justify-center flex-shrink-0">
      <span className="text-2xl">🎵</span>
    </div>
    <div>
      <h3 className="font-bold text-xl text-gray-900 mb-2 flex items-center gap-2">
        Creative Side
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </h3>
      <p className="text-gray-600 font-medium">Music Creator</p>
      <p className="text-gray-500 text-sm mt-1">LISTEN to my TASTE</p>
    </div>
  </div>
</a>
              </div>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-8 leading-tight">
                Passionate about building the <span className="bg-gradient-to-r from-amber-400 to-rose-400 bg-clip-text text-transparent">future of technology</span>
              </h3>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                I'm a dedicated Computer Science student with a deep passion for Artificial Intelligence and IoT. 
                My journey in tech is driven by curiosity and the desire to create solutions that make a real-world impact.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                I combine strong programming fundamentals with emerging technologies to build intelligent systems that solve 
                complex problems. Currently seeking opportunities to apply my skills in professional environments.
              </p>

              <div className="flex flex-wrap gap-3">
                <span className="px-5 py-2 bg-red-50 border border-rose-400 rounded-full text-sm font-medium text-gray-700">Problem Solver</span>
                <span className="px-5 py-2 bg-red-50 border border-amber-400 rounded-full text-sm font-medium text-gray-700">Quick Learner</span>
                <span className="px-5 py-2 bg-red-50 border border-red-400 rounded-full text-sm font-medium text-gray-700">Team Player</span>
                <span className="px-5 py-2 bg-red-50 border border-orange-400 rounded-full text-sm font-medium text-gray-700">Innovative Thinker</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - MacBook Mockup Style */}
      <section 
        id="projects" 
        ref={sectionsRef.current[1]}
        className="min-h-screen flex items-center justify-center px-6 py-32 opacity-0 translate-y-20 scale-95 transition-all duration-1000"
      >
        <div className="max-w-7xl w-full">
          <div className="text-center mb-20">
            <span className="px-6 py-2 bg-gradient-to-r from-amber-500 to-rose-500/50 rounded-full text-sm text-gray-700 inline-block mb-4">
              My Work
            </span>
            <h2 className="text-6xl font-bold text-gray-900 mb-4">Featured Project</h2>
            <p className="text-xl text-gray-600">Building intelligent solutions for tomorrow</p>
          </div>

          {/* MacBook-style project display */}
          <div className="relative group">
            {/* Laptop base */}
            <div className="bg-gradient-to-b from-gray-300 to-gray-300 rounded-b-3xl h-8 mx-auto" style={{ width: '95%' }}></div>
            
            {/* Screen */}
            <div className="bg-gray-900 rounded-t-3xl p-2 shadow-2xl relative overflow-hidden transform -translate-y-2">
              <div className="bg-white rounded-lg overflow-hidden" style={{ aspectRatio: '16/10' }}>
                <div className="h-full bg-gradient-to-br from-rose-300 via-rose-200 to-amber-300 p-12 flex items-center">
                  <div className="grid md:grid-cols-2 gap-12 w-full">
                    <div>
                      <span className="px-4 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium inline-block mb-6">
                        College Project • 2025
                      </span>
                      <h3 className="text-5xl font-bold text-gray-900 mb-6">
                        Predictive Maintenance System
                      </h3>
                      <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        An intelligent IoT-based solution leveraging Machine Learning to predict equipment failures 
                        before they occur, minimizing downtime and reducing operational costs.
                      </p>
                      <div className="flex flex-wrap gap-3 mb-8">
                        <span className="px-4 py-2 bg-white border border-amber-400 rounded-full text-sm font-medium text-gray-800">IoT Sensors</span>
                        <span className="px-4 py-2 bg-white border border-blue-400 rounded-full text-sm font-medium text-gray-800">ML Algorithms</span>
                        <span className="px-4 py-2 bg-white border border-purple-400 rounded-full text-sm font-medium text-gray-800">Python</span>
                        <span className="px-4 py-2 bg-white border border-rose-400 rounded-full text-sm font-medium text-gray-800">Data Analytics</span>
                      </div>
                      <a 
  href="/project.pdf" 
  target="_blank"
  rel="noopener noreferrer"
  className="px-8 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all inline-flex items-center gap-2 group shadow-lg hover:shadow-xl hover:-translate-y-1"
>
  <span>View Details</span>
  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
</a>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="relative">
                        <div className="w-64 h-64 bg-gradient-to-br from-amber-300 to-rose-400 border-black-400 rounded-3xl shadow-xl flex items-center justify-center">
                          <div className="text-center">
                            <svg className="w-24 h-24 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                            </svg>
                            <p className="text-gray-500 text-sm">Project Demo</p>
                          </div>
                        </div>
                        <div className="absolute -top-4 -right-4 w-20 h-20 bg-amber-200 rounded-full blur-xl opacity-50"></div>
                        <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-200 rounded-full blur-xl opacity-50"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Camera notch */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-800 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Skills Section - Enhanced */}
      <section 
        id="skills" 
        ref={sectionsRef.current[2]}
        className="min-h-screen flex items-center justify-center px-6 py-32 opacity-0 translate-y-20 scale-95 transition-all duration-1000"
      >
        <div className="max-w-7xl w-full">
          <div className="text-center mb-20">
            <span className="px-6 py-2 bg-gradient-to-r from-amber-400 to-rose-400 border border-purple-200/50 rounded-full text-sm text-gray-700 inline-block mb-4">
              Expertise
            </span>
            <h2 className="text-6xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
            <p className="text-xl text-gray-600">Tools and technologies I work with</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Programming Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-rose-400 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
              <div className="relative bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-100 to-rose-400 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-4xl">💻</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Programming</h3>
                <ul className="space-y-4">
                  {['C Programming', 'Python', 'Java'].map((skill) => (
                    <li key={skill} className="flex items-center gap-4 text-gray-700 text-lg">
                      <div className="w-2 h-2 bg-gradient-to-r from-amber-400 to-rose-400 rounded-full"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Core Skills Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 rounded-3xl transform -rotate-2 group-hover:-rotate-4 transition-transform duration-300"></div>
              <div className="relative bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-100 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-4xl">🧠</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Skills</h3>
                <ul className="space-y-4">
                  {['Data Structures & Algorithms', 'Machine Learning', 'Problem Solving'].map((skill) => (
                    <li key={skill} className="flex items-center gap-3 text-gray-700 text-lg">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Technologies Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-teal-400 rounded-3xl transform rotate-2 group-hover:rotate-4 transition-transform duration-300"></div>
              <div className="relative bg-white rounded-3xl p-12 shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-teal-400 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-4xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Technologies</h3>
                <ul className="space-y-4">
                  {['Internet of Things (IoT)', 'Artificial Intelligence', 'Data Analysis'].map((skill) => (
                    <li key={skill} className="flex items-center gap-3 text-gray-700 text-lg">
                      <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-teal-400 rounded-full"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {/* Contact Section */}
      <section 
        id="contact" 
        ref={sectionsRef.current[3]}
        className="min-h-screen flex items-center justify-center px-6 py-32 opacity-0 translate-y-20 scale-95 transition-all duration-1000"
      >
        <div className="max-w-6xl w-full">
          <div className="text-center mb-16">
            <span className="px-6 py-2 bg-gradient-to-r from-amber-400 to-rose-400 rounded-full text-sm text-gray-700 inline-block mb-6">
              Get In Touch
            </span>
            <h2 className="text-6xl font-bold text-gray-900 mb-6">Let's Connect</h2>
            <p className="text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
              I'm always excited to discuss new opportunities, innovative projects, or collaborations!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 mb-12">
            {/* Left - Contact Info */}
            <div className="space-y-6">
              <a href="mailto:aditya.sah@example.com" className="block group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center gap-5">
                  <div className="text-5xl group-hover:scale-110 transition-transform duration-300">📧</div>
                  <div>
                    <p className="font-bold text-xl text-gray-900 mb-1">Email</p>
                    <p className="text-gray-600 text-sm">ak3273657@gmail.com</p>
                  </div>
                </div>
              </a>
              
              <a href="tel:+918099425400" className="block group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center gap-5">
                  <div className="text-5xl group-hover:scale-110 transition-transform duration-300">📱</div>
                  <div>
                    <p className="font-bold text-xl text-gray-900 mb-1">Phone</p>
                    <p className="text-gray-600 text-sm">+91 8099425400</p>
                  </div>
                </div>
              </a>
              
              <a href="https://www.linkedin.com/feed/" target="_blank" className="block group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center gap-5">
                  <div className="text-5xl group-hover:scale-110 transition-transform duration-300">💼</div>
                  <div>
                    <p className="font-bold text-xl text-gray-900 mb-1">LinkedIn</p>
                    <p className="text-gray-600 text-sm">Connect with me</p>
                  </div>
                </div>
              </a>

              {/* Collab Button */}
              <a 
                href="mailto:aditya.sah@example.com?subject=Collaboration" 
                className="block bg-gradient-to-r from-amber-400 to-rose-400 text-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <p className="text-3xl mb-2">💬</p>
                <p className="font-bold text-lg">Contact for COLLABS </p>
              </a>
            </div>

            {/* Right - Message Form */}
            <div className="bg-white rounded-3xl p-10 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send me a message</h3>
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:border-amber-400 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input 
                    type="email"
                    className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:border-amber-400 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows={5}
                    className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:border-amber-400 transition-all duration-300 resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full px-8 py-4 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all duration-300 font-bold shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6">
            <a href="https://github.com/zzcsv2n8yf-afk" target="_blank" className="group w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-lg">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="https://x.com/Adityakumasah" target="_blank" className="group w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-lg">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://www.instagram.com/aaditunes_?igsh=cHF0bWN4Y3NrbnB3&utm_source=qr" target="_blank" className="group w-16 h-16 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-full flex items-center justify-center text-white hover:from-purple-500 hover:via-pink-500 hover:to-orange-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-lg">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-2xl font-bold mb-2">Aditya Sah</p>
          <p className="text-gray-400 mb-8">Building the future, one line of code at a time</p>
          <p className="text-gray-500 text-sm">© 2026 Aditya Sah. Crafted with passion and Next.js</p>
        </div>
      </footer>
    </div>
  </main>
  );
}