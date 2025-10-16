
export default function SkillsSection() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: 'ri-code-line',
      color: 'purple',
      skills: [
        { name: 'C', level: 90 },
        { name: 'C++', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'JavaScript', level: 75 },
        { name: 'HTML/CSS', level: 85 },
        { name: 'MySQL', level: 70 }
      ]
    },
    {
      title: 'Game Development',
      icon: 'ri-gamepad-line',
      color: 'cyan',
      skills: [
        { name: 'Unity Game Engine', level: 90 },
        { name: 'C# for Unity', level: 85 },
        { name: 'Game Design', level: 80 },
        { name: '3D Modeling', level: 75 },
        { name: 'Animation', level: 70 },
        { name: 'Physics Systems', level: 75 }
      ]
    },
    {
      title: 'VR/AR Development',
      icon: 'ri-vr-line',
      color: 'pink',
      skills: [
        { name: 'Virtual Reality Implementation', level: 85 },
        { name: 'VR SDK Integration', level: 80 },
        { name: 'Immersive Interactions', level: 85 },
        { name: 'Spatial Audio', level: 70 },
        { name: 'Hand Tracking', level: 75 },
        { name: 'Room-Scale VR', level: 80 }
      ]
    },
    {
      title: 'Tools & Frameworks',
      icon: 'ri-tools-line',
      color: 'green',
      skills: [
        { name: 'Blender', level: 80 },
        { name: 'Git/GitHub', level: 85 },
        { name: 'Visual Studio', level: 90 },
        { name: 'Pandas', level: 70 },
        { name: 'NumPy', level: 65 },
        { name: 'Flask', level: 60 }
      ]
    }
  ];

  const certifications = [
    {
      title: 'Python Programming Certification',
      issuer: 'VIT Bhopal University',
      icon: 'ri-python-line',
      color: 'yellow'
    },
    {
      title: 'HTML, CSS, and JavaScript for Web Developers',
      issuer: 'Udemy',
      icon: 'ri-html5-line',
      color: 'orange'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Technical skills and expertise gained through academic projects, certifications, and hands-on development experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-${category.color}-500/20 to-${category.color}-600/20 border border-${category.color}-500/30 flex items-center justify-center mr-4`}>
                  <i className={`${category.icon} text-xl text-${category.color}-400`}></i>
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r from-${category.color}-500 to-${category.color}-400 transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">Certifications</h3>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-${cert.color}-500/20 to-${cert.color}-600/20 border border-${cert.color}-500/30 flex items-center justify-center flex-shrink-0`}>
                    <i className={`${cert.icon} text-xl text-${cert.color}-400`}></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">{cert.title}</h4>
                    <p className="text-gray-400 text-sm">{cert.issuer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-2xl p-8 border border-purple-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Academic Excellence</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">9.72</div>
                <div className="text-gray-300">Current CGPA</div>
                <div className="text-sm text-gray-400">VIT Bhopal</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">87.2%</div>
                <div className="text-gray-300">Class XII</div>
                <div className="text-sm text-gray-400">Kendriya Vidyalaya</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">81.0%</div>
                <div className="text-gray-300">Class X</div>
                <div className="text-sm text-gray-400">J.B.M. Public School</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}