import { InView } from "react-intersection-observer"
import { Code, Palette, Database, Globe, Zap, Shield } from "lucide-react"

function Skills() {
  const skillCategories = [
    {
      title: " Backend Development",
      icon: Code,
      color: "from-blue-400 to-cyan-400",
      skills: [
        { name: "Flask/Fast", level: 95 },
        { name: "microservices", level: 90 },
        { name: "Scripting", level: 88 },
        { name: "MVT", level: 85 },
        { name: " Django ORM", level: 85 },
        { name: "Job Scheduling", level: 85 }
      ]
    },
    {
      title: "DATABASES",
      icon: Database,
      color: "from-purple-400 to-pink-400",
      skills: [
        { name: "POSTGRESQL", level: 95 },
        { name: "Mysql/mongodb", level: 88 },
        { name: "Reddis", level: 95 },
        { name: "Rabbit MQ", level: 70 },
        { name: "Sql query", level: 70 }
      ]
    },
    {
      title: "Frontend Development",
      icon: Code,
      color: "from-green-400 to-emerald-400",
      skills: [
        { name: "HTML CSSS Bootstrap", level: 85 },
        { name: "react", level: 88 },
        { name: "jinja templates", level: 90 },
      ]
    },
    {
      title: "Tools & Workflow",
      icon: Globe,
      color: "from-orange-400 to-red-400",
      skills: [
        { name: "Git", level: 85 },
        { name: "GitHub", level: 88 },
        { name: "VS Code", level: 95 },
        { name: "NPM/pip", level: 80 },
        { name: "virtualenv", level: 70 }
      ]
    }
  ]

  const additionalSkills = [
    { name: "Component Reusability", icon: Zap, color: "text-yellow-400" },
    { name: "Cross-browser Compatibility", icon: Globe, color: "text-blue-400" },
    { name: "Performance Optimization", icon: Zap, color: "text-green-400" },
    { name: "Code Review", icon: Shield, color: "text-purple-400" },
    { name: "Agile Methodology", icon: Globe, color: "text-pink-400" },
    { name: "Problem Solving", icon: Shield, color: "text-cyan-400" }
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.02)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.03)_0%,transparent_50%)]" />
        
        {/* Floating code symbols */}
        <div className="absolute top-1/4 left-1/4 text-white/5 text-8xl font-mono animate-float">&lt;/&gt;</div>
        <div className="absolute bottom-1/3 right-1/3 text-white/5 text-6xl font-mono animate-float-delayed">{}</div>
        <div className="absolute top-1/2 right-1/4 text-white/5 text-7xl font-mono animate-pulse">( )</div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels in modern web development.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <InView key={category.title} triggerOnce threshold={0.1}>
              {({ inView, ref }) => (
                <div
                  ref={ref}
                  className={`relative transition-all duration-1000 ease-out ${
                    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${categoryIndex * 200}ms` }}
                >
                  {/* Background glow */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-5 rounded-3xl blur-2xl`} />
                  
                  <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300" style={{minHeight: '520px'}}>
                    {/* Category header */}
                    <div className="flex items-center space-x-4 mb-8">
                      <div className={`p-3 rounded-2xl bg-gradient-to-r ${category.color} bg-opacity-10 border border-white/20`}>
                        <category.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        {category.title}
                      </h3>
                    </div>

                    {/* Skills list */}
                    <div className="space-y-6">
                      {category.skills.map((skill, skillIndex) => (
                        <div
                          key={skill.name}
                          className={`transition-all duration-700 ${
                            inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                          }`}
                          style={{ transitionDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms` }}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-gray-300 font-medium">{skill.name}</span>
                            <span className="text-white text-sm font-semibold">{skill.level}%</span>
                          </div>
                          
                          {/* Progress bar */}
                          <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                            <div
                              className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                              style={{
                                width: inView ? `${skill.level}%` : '0%',
                                transitionDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </InView>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mb-16">
          <InView triggerOnce threshold={0.1}>
            {({ inView, ref }) => (
              <div
                ref={ref}
                className={`transition-all duration-1000 ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <h3 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-white">
                  Additional Expertise
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {additionalSkills.map((skill, index) => (
                    <div
                      key={skill.name}
                      className={`group relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/30 transition-all duration-500 hover:scale-105 ${
                        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                      }`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      {/* Hover glow effect */}
                      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 rounded-2xl transition-all duration-300" />
                      
                      <div className="relative flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <skill.icon className={`h-8 w-8 ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                        </div>
                        <span className="text-gray-300 group-hover:text-white font-medium transition-colors duration-300">
                          {skill.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </InView>
        </div>

     
      </div>
    </section>
  )
}

export default Skills