
export default function RecognitionSection() {
  const achievements = [
    {
      title: 'Top 10 National Rank',
      subtitle: 'Innovate2Education Challenge under WAVES 2025',
      description: 'Achieved top 10 position out of 1800+ participating teams in the national innovation challenge',
      icon: 'ri-trophy-line',
      color: 'yellow',
      stats: { value: '10', label: 'Out of 1800+ Teams' }
    },
    {
      title: 'Student Coordinator',
      subtitle: 'VR & Gaming Club, VIT Bhopal',
      description: 'Leading VR and gaming initiatives, organizing workshops and mentoring fellow students',
      icon: 'ri-team-line',
      color: 'purple',
      stats: { value: '9.72', label: 'CGPA' }
    },
    {
      title: 'XR Research Intern',
      subtitle: 'IIT Delhi (May - July 2025)',
      description: 'Conducted research in Extended Reality technologies at one of India\'s premier institutes',
      icon: 'ri-research-line',
      color: 'cyan',
      stats: { value: '3', label: 'Months' }
    }
  ];

  const statistics = [
    { value: '8+', label: 'Projects Completed', icon: 'ri-code-box-line', color: 'purple' },
    { value: '4+', label: 'VR Platforms', icon: 'ri-vr-line', color: 'cyan' },
    { value: '1+', label: 'Years Experience', icon: 'ri-time-line', color: 'pink' },
    { value: '100%', label: 'Passion for VR', icon: 'ri-heart-line', color: 'red' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            Recognition & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Key milestones and recognition earned through dedication to VR development and academic excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="text-center mb-6">
                <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-${achievement.color}-500/20 to-${achievement.color}-600/20 border border-${achievement.color}-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${achievement.icon} text-2xl text-${achievement.color}-400`}></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                <p className="text-purple-400 font-medium text-sm mb-3">{achievement.subtitle}</p>
              </div>
              
              <p className="text-gray-300 text-sm leading-relaxed mb-6 text-center">
                {achievement.description}
              </p>
              
              <div className="text-center">
                <div className={`text-3xl font-bold text-${achievement.color}-400 mb-1`}>
                  {achievement.stats.value}
                </div>
                <div className="text-gray-400 text-sm">{achievement.stats.label}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-2xl p-8 border border-purple-500/20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Performance Statistics</h3>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-${stat.color}-500/20 to-${stat.color}-600/20 border border-${stat.color}-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${stat.icon} text-xl text-${stat.color}-400`}></i>
                </div>
                <div className={`text-3xl font-bold text-${stat.color}-400 mb-2`}>
                  {stat.value}
                </div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-600/20 border border-purple-500/30 flex items-center justify-center mr-4">
                <i className="ri-graduation-cap-line text-2xl text-purple-400"></i>
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white">Academic Journey</h3>
                <p className="text-gray-400">B.Tech in Computer Science & Engineering</p>
                <p className="text-purple-400 text-sm">Specialization: Gaming Technology</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="text-2xl font-bold text-purple-400 mb-2">Current</div>
                <div className="text-gray-300 text-sm">VIT Bhopal University</div>
                <div className="text-gray-400 text-xs">2023 - 2027</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="text-2xl font-bold text-cyan-400 mb-2">87.2%</div>
                <div className="text-gray-300 text-sm">Class XII</div>
                <div className="text-gray-400 text-xs">Kendriya Vidyalaya</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="text-2xl font-bold text-pink-400 mb-2">81.0%</div>
                <div className="text-gray-300 text-sm">Class X</div>
                <div className="text-gray-400 text-xs">J.B.M. Public School</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}