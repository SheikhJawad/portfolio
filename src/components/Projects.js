import { InView } from "react-intersection-observer"
import { ExternalLink, Github } from "lucide-react"

function Projects() {
  const projects = [
    {
      title: "Project Tracking App",
      description: "A comprehensive trading dashboard with real-time data visualization.",
      image: "/tracking app.png",
      tech: ["django", "REST Api", " Typescript", "Postgresql"],
      liveLink: "https://track.camzify.com/",
      githubLink: "https://github.com/SheikhJawad"
    },
    {
      title: "Buybox Tinder real Estate",
      description: "A comprehensive tinder dashboard for property visualization.",
      image: "/offa.png",
      tech: ["django", "REST Api", " Jinja Templates", "Postgresql","Celery","Redis","Docker"],
      liveLink: "https://offa.com/",
      githubLink: "https://github.com/SheikhJawad"
    },
    {
      title: "Camzify video surveillance",
      description: "Globally recvognized video surveillance system.",
      image: "/camzify.png",
      tech: ["django", " React", " microservices", "Redis"," Redis", "GCP","ML/AI","Docker"],
      liveLink: "https://app.camzify.com/",
      githubLink: "https://github.com/SheikhJawad"
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.02)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.03)_0%,transparent_50%)]" />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in Back-end development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <InView key={project.title} triggerOnce threshold={0.1}>
              {({ inView, ref }) => (
                <div
                  ref={ref}
                  className={`group relative transition-all duration-700 ease-out hover:scale-[1.02]
                    ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Card background glow */}
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500 rounded-2xl" />
                  
                  <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-500 shadow-2xl">
                    {/* Project Image */}
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={`${project.title} preview`}
                        className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      {/* Overlay with buttons */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center space-x-4">
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white/90 backdrop-blur-sm text-black rounded-full hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg"
                          aria-label="View live project"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white/90 backdrop-blur-sm text-black rounded-full hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg"
                          aria-label="View GitHub repository"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6 space-y-4" style={{ minHeight: "300px" }}>
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-gray-200 transition-colors duration-300">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-300 text-sm leading-relaxed" style={{ minHeight: "80px" }}>
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-white/10 text-gray-300 text-xs rounded-full border border-white/20 hover:bg-white/20 hover:text-white transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3 pt-4">
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-white text-black rounded-xl font-medium text-sm hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>

                      </div>
                    </div>
                  </div>
                </div>
              )}
            </InView>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-white/5 blur-2xl rounded-2xl" />
            <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Want to see more of my work?
              </h3>
              <p className="text-gray-300 mb-6 max-w-md mx-auto">
                I'm always open to discussing new opportunities and exciting projects.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-white text-black rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects