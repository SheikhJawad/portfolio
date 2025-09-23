import { Linkedin, Github, Mail, Heart, ArrowUp } from "lucide-react"

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/zain-saleem-24417625b/",
      color: "hover:text-blue-400",
      bgColor: "hover:bg-blue-400/10"
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/zain1873",
      color: "hover:text-gray-300",
      bgColor: "hover:bg-gray-300/10"
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:zain.saleem155@gmail.com",
      color: "hover:text-green-400",
      bgColor: "hover:bg-green-400/10"
    }
  ]

  return (
    <footer className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_0%,rgba(255,255,255,0.02)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_100%,rgba(255,255,255,0.03)_0%,transparent_50%)]" />
      </div>

      {/* Main footer content */}
      <div className="relative z-10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Top section */}
          <div className="grid lg:grid-cols-3 gap-12 mb-12">
            {/* Brand section */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                 Sheikh Muhammad Jawad
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Backend Django Developer & Data Analyst passionate about building scalable systems, managing data efficiently, and extracting insights to drive smarter decisions.
                </p>
              </div>
              
              {/* Quick contact */}
              <div className="space-y-2 text-sm">
                <p className="text-gray-500">Let's connect:</p>
              <a href="mailto:zain.saleem155@gmail.com"><p className="text-gray-300">hafizjawad858@gmnail.com</p> </a>
              <a href="tel:+92 3094172130"> <p className="text-gray-300">+92 3020430376</p> </a>
              </div>
            </div>

            {/* Navigation links */}
            <div className="lg:col-span-1">
              <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
              <div className="grid grid-cols-2 gap-4">
                {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter signup */}
            <div className="lg:col-span-1">
              <h4 className="text-lg font-semibold mb-6 text-white">Stay Updated</h4>
              <p className="text-gray-400 mb-4 text-sm">
                Get notified about my latest projects and articles.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent text-sm"
                />
                <button className="px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors duration-300 text-sm font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

          {/* Bottom section */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© 2025 Sheikh M Jawad</span>
            </div>

            {/* Social links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className={`group relative p-3 rounded-xl bg-white/5 border border-white/10 transition-all duration-300 hover:scale-110 hover:border-white/30 ${social.bgColor}`}
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-xl bg-white/0 group-hover:bg-white/5 transition-all duration-300" />
                  
                  <social.icon className={`h-5 w-5 text-gray-400 transition-colors duration-300 ${social.color} relative z-10`} />
                </a>
              ))}
            </div>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="group relative p-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-110"
              aria-label="Back to top"
            >
              <div className="absolute inset-0 rounded-xl bg-white/0 group-hover:bg-white/5 transition-all duration-300" />
              <ArrowUp className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-300 relative z-10" />
            </button>
          </div>

 
        </div>
      </div>

      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-30" />
    </footer>
  )
}

export default Footer