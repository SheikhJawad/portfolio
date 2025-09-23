import { InView } from "react-intersection-observer"
import { 
  Braces as PythonIcon, 
  Github, 
  Server as DjangoIcon, 
  Cloud, 
  Paintbrush as TailwindIcon, 
  Network as ApiIcon,
  BarChartBig
} from "lucide-react"


function About() {
  const tools = [
    { name: "Python", icon: PythonIcon, color: "from-blue-400 to-cyan-400" },
    { name: "Github", icon: Github, color: "from-gray-400 to-gray-600" },
    { name: "Django", icon: DjangoIcon, color: "from-green-500 to-emerald-500" },
    { name: "Cloud", icon: Cloud, color: "from-yellow-400 to-orange-400" },
      { name: "Data Analyst", icon: BarChartBig, color: "from-indigo-400 to-purple-500" },
    { name: "REST APIs", icon: ApiIcon, color: "from-green-400 to-emerald-400" },
  ]



  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/2 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white/3 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02)_0%,transparent_70%)]" />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <InView triggerOnce threshold={0.1}>
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`transition-all duration-1000 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              {/* Header */}
              <div className="text-center mb-16">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                  About Me
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8" />
              </div>

              {/* Main content grid */}
              <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                {/* Text content */}
                <div className="space-y-8">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent rounded-2xl blur-xl" />
                    <div className="relative bg-black/40 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                      <p className="text-lg sm:text-xl leading-relaxed text-gray-300">
  A passionate and results-driven 
  <span className="text-white font-semibold"> Backend Developer & Data Analyst </span>
  with a strong foundation in server-side technologies and data-driven solutions. I specialize in building 
  <span className="text-white font-semibold"> scalable systems, efficient APIs, and actionable insights </span>
  from complex datasets.
</p>

                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/3 to-transparent rounded-2xl blur-xl" />
                    <div className="relative bg-black/30 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                      <p className="text-lg leading-relaxed text-gray-300">
                        My expertise lies in crafting 
                        <span className="text-white font-semibold"> seamless backend experince </span>
                        and crafting complex APIs to deliver 
                        <span className="text-white font-semibold"> smooth and consistent  data traffic </span>
                        that users love and businesses rely on.
                      </p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-6 mt-8">
                    <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                      <div className="text-3xl font-bold text-white mb-2">2</div>
                      <div className="text-gray-400 text-sm">Years Experience</div>
                    </div>
                    <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                      <div className="text-3xl font-bold text-white mb-2">8+</div>
                      <div className="text-gray-400 text-sm">Projects Completed</div>
                    </div>
                  </div>
                </div>

                {/* Profile image placeholder */}
<div className="relative bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-4 border border-white/20 aspect-square">
  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 rounded-3xl blur-2xl" />

  <div className="relative w-full h-full overflow-hidden rounded-2xl">
    <img
      src="/profile.jpg" // make sure this is in the public folder
      alt="profile pic"
      className="w-full h-full object-cover"
    />
  </div>
</div>

              </div>

              {/* Tools & Technologies */}
              <div className="text-center mb-12">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white">Tools & Technologies</h3>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Here are the technologies I work with to bring ideas to life
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
                {tools.map((tool, index) => (
                  <div
                    key={tool.name}
                    className={`group relative transition-all duration-700 delay-${index * 100} ${
                      inView ? "opacity-100 scale-100" : "opacity-0 scale-90"
                    }`}
                  >
                    {/* Background glow */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${tool.color} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300 rounded-2xl`} />
                    
                    {/* Card */}
                    <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/30 transition-all duration-300 group-hover:transform group-hover:scale-105">
                      <div className="flex flex-col items-center text-center space-y-4">
                        {/* Icon with gradient background */}
                        <div className={`relative w-16 h-16 rounded-xl bg-gradient-to-r ${tool.color} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                          <div className="w-full h-full bg-black rounded-xl flex items-center justify-center">
                            <tool.icon className="h-8 w-8 text-white" />
                          </div>
                        </div>
                        
                        {/* Tool name */}
                        <span className="text-sm sm:text-base font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                          {tool.name}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </InView>
      </div>
    </section>
  )
}

export default About