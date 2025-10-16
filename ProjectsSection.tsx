
import { useState } from 'react';

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Echoes in the Void',
      category: 'vr',
      description: 'Currently developing a sci-fi VR survival game set on a space station invaded by invisible aliens. Players must protect themselves and the station using Unity VR.',
      image: 'https://readdy.ai/api/search-image?query=Sci-fi%20VR%20survival%20game%20screenshot%20showing%20futuristic%20space%20station%20interior%20with%20dark%20corridors%2C%20invisible%20alien%20threats%2C%20high-tech%20equipment%2C%20atmospheric%20lighting%2C%20Unity%20game%20engine%20graphics%2C%20immersive%20VR%20experience%20with%20holographic%20interfaces%20and%20space%20environment&width=600&height=400&seq=echoes-void&orientation=landscape',
      tech: ['Unity', 'C#', 'VR SDK', 'Sci-Fi Design'],
      features: ['Spatial Audio', 'Hand Tracking', 'Room-Scale VR', 'AI Enemies'],
      github: 'https://github.com/Lucky1403',
      demo: '#',
      status: 'In Development'
    },
    {
      id: 2,
      title: 'The Woods VR',
      category: 'vr',
      description: 'Developed a VR zombie shooter game with immersive first-person interactions using Unity Game Engine.',
      image: 'https://readdy.ai/api/search-image?query=VR%20zombie%20shooter%20game%20screenshot%20showing%20dark%20forest%20environment%20with%20zombies%2C%20first-person%20view%20with%20weapon%2C%20atmospheric%20lighting%2C%20Unity%20game%20engine%20graphics%2C%20horror%20survival%20gameplay%2C%20immersive%20VR%20experience%20with%20realistic%20shadows%20and%20fog%20effects&width=600&height=400&seq=woods-vr&orientation=landscape',
      tech: ['Unity', 'C#', 'VR SDK', 'Blender'],
      features: ['Immersive Combat', 'Environmental Audio', 'Physics-Based Interactions'],
      github: 'https://github.com/Lucky1403',
      demo: '#'
    },
    {
      id: 3,
      title: 'Musical Auditorium VR',
      category: 'vr',
      description: 'Creating a VR musical auditorium where users play instruments in a live concert setting.',
      image: 'https://readdy.ai/api/search-image?query=VR%20musical%20auditorium%20with%20virtual%20instruments%2C%20concert%20hall%20environment%2C%20users%20playing%20piano%20and%20guitar%20in%20VR%2C%20stage%20lighting%2C%20audience%20seating%2C%20immersive%20music%20experience%2C%20Unity%203D%20graphics%2C%20realistic%20concert%20venue%20atmosphere&width=600&height=400&seq=musical-vr&orientation=landscape',
      tech: ['Unity', 'VR', 'Audio Systems', '3D Modeling'],
      features: ['Spatial Audio', 'Hand Tracking', 'Multi-User Support', 'Real-Time Audio'],
      github: 'https://github.com/Lucky1403',
      demo: '#'
    },
    {
      id: 4,
      title: 'Battle Centrum',
      category: 'game',
      description: 'Designed a Third-Person Shooter (TPS) game with engaging story-driven gameplay in Unity.',
      image: 'https://readdy.ai/api/search-image?query=Third-person%20shooter%20game%20screenshot%20showing%20character%20with%20weapon%2C%20action-packed%20battlefield%20environment%2C%20Unity%20game%20graphics%2C%20dynamic%20combat%20scene%2C%20modern%20military%20setting%2C%20engaging%20gameplay%20mechanics&width=600&height=400&seq=battle-centrum&orientation=landscape',
      tech: ['Unity', 'C#', 'Game Design', 'Animation'],
      features: ['Story Mode', 'Combat System', 'Character Progression', 'Dynamic AI'],
      github: 'https://github.com/Lucky1403',
      demo: '#'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      category: 'web',
      description: 'Created a personal portfolio website showcasing projects and technical skills.',
      image: 'https://readdy.ai/api/search-image?query=Modern%20portfolio%20website%20design%20with%20dark%20theme%2C%20purple%20and%20cyan%20gradients%2C%20project%20showcase%20grid%2C%20responsive%20web%20design%2C%20HTML%20CSS%20JavaScript%2C%20clean%20professional%20layout%2C%20tech%20portfolio%20interface&width=600&height=400&seq=portfolio-web&orientation=landscape',
      tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      features: ['Responsive Design', 'Interactive UI', 'Project Showcase', 'Contact Forms'],
      github: 'https://github.com/Lucky1403',
      demo: '#'
    },
    {
      id: 6,
      title: 'Currency Calculator',
      category: 'web',
      description: 'Built a real-time currency converter supporting more than 190 global currencies.',
      image: 'https://readdy.ai/api/search-image?query=Currency%20calculator%20web%20application%20interface%20showing%20exchange%20rates%2C%20multiple%20currency%20options%2C%20real-time%20conversion%2C%20clean%20modern%20UI%20design%2C%20financial%20app%20interface%2C%20responsive%20web%20design&width=600&height=400&seq=currency-calc&orientation=landscape',
      tech: ['HTML', 'CSS', 'JavaScript', 'API Integration'],
      features: ['Real-Time Rates', 'Multi-Currency Support', 'Clean UI', 'API Integration'],
      github: 'https://github.com/Lucky1403',
      demo: '#'
    },
    {
      id: 7,
      title: 'Invoice Website',
      category: 'web',
      description: 'Developed an invoice generation system for small-scale companies using JavaScript, HTML, and CSS.',
      image: 'https://readdy.ai/api/search-image?query=Invoice%20generation%20web%20application%20interface%20showing%20professional%20invoice%20template%2C%20business%20document%20layout%2C%20form%20fields%2C%20company%20branding%2C%20clean%20business%20software%20design%2C%20modern%20web%20interface&width=600&height=400&seq=invoice-web&orientation=landscape',
      tech: ['HTML', 'CSS', 'JavaScript', 'PDF Generation'],
      features: ['PDF Export', 'Template System', 'Business Logic', 'Data Management'],
      github: 'https://github.com/Lucky1403',
      demo: '#'
    },
    {
      id: 8,
      title: 'Weather Report',
      category: 'python',
      description: 'Built a Python tool that fetches real-time weather data using API integration.',
      image: 'https://readdy.ai/api/search-image?query=Weather%20application%20interface%20showing%20current%20weather%20conditions%2C%20temperature%20display%2C%20weather%20icons%2C%20forecast%20data%2C%20Python%20GUI%20application%2C%20clean%20weather%20app%20design%2C%20API%20data%20visualization&width=600&height=400&seq=weather-app&orientation=landscape',
      tech: ['Python', 'API Integration', 'GUI', 'Data Processing'],
      features: ['Real-Time Data', 'Weather Forecasts', 'Location-Based', 'GUI Interface'],
      github: 'https://github.com/Lucky1403',
      demo: '#'
    },
    {
      id: 9,
      title: 'Video Downloader',
      category: 'python',
      description: 'Created a YouTube video downloader with highest quality download capabilities.',
      image: 'https://readdy.ai/api/search-image?query=Video%20downloader%20application%20interface%20showing%20YouTube%20video%20download%20options%2C%20quality%20selection%2C%20progress%20bar%2C%20Python%20desktop%20application%2C%20modern%20software%20interface%2C%20download%20manager%20design&width=600&height=400&seq=video-downloader&orientation=landscape',
      tech: ['Python', 'YouTube API', 'GUI', 'File Management'],
      features: ['Quality Selection', 'Batch Downloads', 'Progress Tracking', 'Format Options'],
      github: 'https://github.com/Lucky1403',
      demo: '#'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'vr', label: 'VR/AR', count: projects.filter(p => p.category === 'vr').length },
    { id: 'game', label: 'Games', count: projects.filter(p => p.category === 'game').length },
    { id: 'web', label: 'Web Dev', count: projects.filter(p => p.category === 'web').length },
    { id: 'python', label: 'Python', count: projects.filter(p => p.category === 'python').length }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-black via-gray-900/50 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Explore my diverse portfolio of VR experiences, games, and web applications showcasing technical skills and creativity.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full border transition-all duration-300 whitespace-nowrap cursor-pointer ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white border-transparent shadow-lg'
                  : 'bg-white/5 text-gray-300 border-white/10 hover:border-purple-500/50 hover:text-white'
              }`}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden hover:border-purple-500/30 transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.category === 'vr' ? 'bg-purple-500/80 text-white' :
                    project.category === 'game' ? 'bg-cyan-500/80 text-white' :
                    project.category === 'web' ? 'bg-pink-500/80 text-white' :
                    'bg-green-500/80 text-white'
                  }`}>
                    {project.category.toUpperCase()}
                  </span>
                  {project.status && (
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-orange-500/80 text-white">
                      {project.status}
                    </span>
                  )}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {project.features && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.features.map((feature, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-md border border-purple-500/30"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/10 text-gray-300 text-xs rounded-full border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    <i className="ri-github-fill mr-2"></i>
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center text-gray-300 hover:text-purple-400 transition-colors duration-300 cursor-pointer"
                  >
                    <i className="ri-external-link-line mr-2"></i>
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Lucky1403"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-medium rounded-full hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap"
          >
            <i className="ri-github-fill mr-3 text-xl"></i>
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
