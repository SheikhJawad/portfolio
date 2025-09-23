"use client"
import { ArrowDownToLine, Mail, Code, Sparkles } from "lucide-react"

function Hero() {
  const handleScrollToContact = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center text-center overflow-hidden"
    >
      {/* Enhanced gradient background with animation */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-black via-gray-900 to-black animate-gradient-shift bg-[length:200%_200%]" />
      
      {/* Multiple layer backgrounds for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
      
      {/* Enhanced geometric patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_50%,white_1px,transparent_1px)] bg-[length:60px_60px] animate-pulse" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,white_1px,transparent_1px)] bg-[length:40px_40px]" style={{ animationDelay: '1s' }} />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_40%_80%,white_1px,transparent_1px)] bg-[length:80px_80px]" style={{ animationDelay: '2s' }} />
      </div>
      
      {/* Grid overlay for tech feel */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:100px_100px]" />
      </div>
      
      {/* Floating elements with better positioning */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-40 h-40 border border-white/8 rotate-45 animate-float rounded-lg" />
        <div className="absolute top-3/4 right-1/4 w-32 h-32 border border-white/6 rotate-12 animate-float-delayed rounded-full" />
        <div className="absolute top-1/2 right-1/5 w-24 h-24 bg-white/3 rotate-45 animate-pulse rounded-lg" />
        
        {/* Small accent elements */}
        <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-white/20 rounded-full animate-ping" />
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-white/15 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-2/3 left-1/5 w-2 h-2 bg-white/25 rounded-full animate-ping" style={{ animationDelay: '2.5s' }} />
      </div>
      
      {/* Main content with enhanced styling */}
      <div className="relative z-10 p-6 max-w-4xl mx-auto">
        {/* Enhanced backdrop */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-lg rounded-3xl border border-white/10 -z-10 shadow-2xl" />
        
        {/* Decorative header icon */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-white/20 blur-lg rounded-full"></div>
            <div className="relative p-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Code className="h-8 w-8 text-white" />
            </div>
          </div>
        </div>
        
        {/* Name with enhanced styling */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight animate-fade-in-up">
          <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
            Sheikh  Jawad
          </span>
        </h1>
        
        {/* Enhanced title with icon */}
        <div className="flex items-center justify-center gap-3 mb-6 animate-fade-in-up animation-delay-200">
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-white/50"></div>
          <p className="text-2xl sm:text-3xl md:text-4xl text-gray-200 font-light tracking-wide">
           Backend Django Developer & Data Analyst
          </p>
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-white/50"></div>
        </div>
        
        {/* Enhanced skills with better formatting */}
        <div className="mb-10 animate-fade-in-up animation-delay-400">
          <p className="text-lg sm:text-xl text-gray-300 mb-4 font-light">
            Crafting Digital Experiences with
          </p>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {['Python', 'django', 'postgres/mysql', ' reddis/rabbitMQ', 'microservices', 'API devlopment','Google cloud console','AWS','Digital Ocean','server side scripting','data analysis'].map((skill, index) => (
              <span 
                key={skill}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-gray-200 hover:bg-white/20 hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${600 + index * 100}ms` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        {/* Enhanced buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 animate-fade-in-up animation-delay-800">
          <a
            href ="/jawad_resume.pdf"
            download="jawad_resume.pdf"
            className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-black hover:bg-gray-100 transition-all duration-300 rounded-full text-lg font-semibold shadow-2xl hover:shadow-white/20 hover:scale-105 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <ArrowDownToLine className="mr-3 h-5 w-5 relative z-10 group-hover:animate-bounce" />
            <span className="relative z-10">Download Resume</span>
          </a>
          
          <button
            onClick={handleScrollToContact}
            className="group relative inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 rounded-full text-lg font-semibold backdrop-blur-sm hover:backdrop-blur-none shadow-2xl hover:shadow-white/20 hover:scale-105 overflow-hidden"
          >
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Mail className="mr-3 h-5 w-5 relative z-10 group-hover:animate-pulse" />
            <span className="relative z-10">Let's Connect</span>
          </button>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in-up animation-delay-1000">
          <div className="flex flex-col items-center text-gray-400">
            <div className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent animate-pulse"></div>
          </div>
        </div>
      </div>
      
      {/* Enhanced bottom fade with sparkle effect */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/50 to-transparent" />
      
      {/* Subtle sparkle overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <Sparkles className="absolute top-1/4 left-1/3 h-4 w-4 text-white/30 animate-ping" style={{ animationDelay: '2s' }} />
        <Sparkles className="absolute top-2/3 right-1/4 h-3 w-3 text-white/20 animate-ping" style={{ animationDelay: '4s' }} />
        <Sparkles className="absolute bottom-1/3 left-1/4 h-5 w-5 text-white/25 animate-ping" style={{ animationDelay: '6s' }} />
      </div>
    </section>
  )
}

export default Hero