
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            VR Portfolio
          </div>
          <p className="text-gray-400 mb-6">
            Creating immersive virtual reality experiences for the future
          </p>
          
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 cursor-pointer">
              <i className="ri-linkedin-fill text-xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 cursor-pointer">
              <i className="ri-github-fill text-xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-300 cursor-pointer">
              <i className="ri-twitter-fill text-xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300 cursor-pointer">
              <i className="ri-dribbble-fill text-xl"></i>
            </a>
          </div>
          
          <div className="border-t border-white/10 pt-6">
            <p className="text-gray-500 text-sm">
              © {currentYear} VR Portfolio. All rights reserved. | 
              <a 
                href="https://readdy.ai/?origin=logo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="ml-2 text-purple-400 hover:text-purple-300 transition-colors duration-300"
              >
                Powered by Readdy
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
