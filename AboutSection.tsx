
export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-bold text-white mb-4">
                <i className="ri-graduation-cap-line text-purple-400 mr-3"></i>
                Education & Background
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Currently pursuing Bachelor of Technology in Computer Science (Gaming Technology) at Vellore Institute of Technology, Bhopal with an impressive 9.72 CGPA. Strong academic foundation with consistent excellence throughout my educational journey.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-bold text-white mb-4">
                <i className="ri-briefcase-line text-cyan-400 mr-3"></i>
                Work Experience
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Completed an XR (Extended Reality) internship at IIT Delhi from May to July 2025, gaining hands-on experience with cutting-edge immersive technologies and research methodologies in virtual and augmented reality applications.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-pink-500/30 transition-all duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-bold text-white mb-4">
                <i className="ri-code-line text-pink-400 mr-3"></i>
                Technical Skills
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Proficient in C, C++, Python, MySQL, and Front-End Web Development (HTML, CSS, JavaScript). Experienced with Unity Game Engine, Blender, and Virtual Reality Implementation. Hands-on experience with Meta Quest 2, Meta Quest 3, Oculus Rift, and HTC Vive Pro. Strong foundation in data structures, algorithms, and game development frameworks.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-green-500/30 transition-all duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-bold text-white mb-4">
                <i className="ri-trophy-line text-green-400 mr-3"></i>
                Achievements & Leadership
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Student Coordinator of Virtual Reality & Gaming Club at VIT Bhopal University. Selected among top 10 teams out of 1800+ participants in the Innovate2Education challenge under WAVES 2025, a national event organized by the Government of India in Mumbai.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20young%20developer%20wearing%20VR%20headset%20in%20modern%20tech%20studio%2C%20surrounded%20by%20holographic%20displays%20and%20futuristic%20interfaces%2C%20purple%20and%20cyan%20lighting%2C%20high-tech%20workspace%20with%20multiple%20monitors%20showing%20VR%20development%20tools%2C%20clean%20modern%20aesthetic%20with%20vibrant%20neon%20accents&width=600&height=800&seq=about-profile&orientation=portrait"
                alt="VR Developer Profile"
                className="rounded-2xl shadow-2xl w-full object-cover object-top"
              />
            </div>
            <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-tl from-pink-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
          </div>
        </div>
        
        <div className="mt-16 grid md:grid-cols-4 gap-8">
          <div className="text-center bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-300">
            <div className="text-4xl font-bold text-purple-400 mb-2">9.72</div>
            <div className="text-gray-300">CGPA</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
            <div className="text-4xl font-bold text-cyan-400 mb-2">9+</div>
            <div className="text-gray-300">Projects</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-pink-500/30 transition-all duration-300">
            <div className="text-4xl font-bold text-pink-400 mb-2">Top 10</div>
            <div className="text-gray-300">Innovate2Education</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-green-500/30 transition-all duration-300">
            <div className="text-4xl font-bold text-green-400 mb-2">XR</div>
            <div className="text-gray-300">IIT Delhi Intern</div>
          </div>
        </div>
      </div>
    </section>
  );
}
