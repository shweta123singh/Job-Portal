import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col md:flex-row md:justify-between md:items-start space-y-6 md:space-y-0">
      
      {/* Logo & About */}
      <div className="mb-4 md:mb-0">
        <h2 className="text-2xl font-bold">Job Hunt</h2>
        <p className="mt-2 text-gray-400 text-sm max-w-xs">
          Connecting students and recruiters seamlessly. Explore jobs, apply instantly, and track your applications in one place.
        </p>
      </div>

      {/* Quick Links */}
      <div className="flex flex-col space-y-2">
        <h3 className="font-semibold">Quick Links</h3>
        <a href="/" className="hover:text-gray-400">Home</a>
        <a href="/jobs" className="hover:text-gray-400">Jobs</a>
        <a href="/companies" className="hover:text-gray-400">Companies</a>
      </div>

      {/* Social Icons */}
      <div className="flex flex-col space-y-2">
        <h3 className="font-semibold">Follow Us</h3>
        <div className="flex space-x-4 mt-2">
          <a href="https://www.linkedin.com/in/25shwetasingh/" className="hover:text-gray-400" aria-label="LinkedIn">
            {/* LinkedIn SVG */}
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452H16.85v-5.569c0-1.327-.027-3.037-1.852-3.037-1.854 0-2.137 1.446-2.137 2.94v5.666H9.147V9.756h3.448v1.464h.05c.48-.91 1.653-1.871 3.401-1.871 3.634 0 4.307 2.39 4.307 5.498v5.605zM5.337 8.29c-1.105 0-2-.896-2-2 0-1.106.895-2 2-2 1.104 0 2 .895 2 2 0 1.104-.896 2-2 2zM7.119 20.452H3.553V9.756h3.566v10.696zM22.225 0H1.771C.791 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451c.979 0 1.771-.774 1.771-1.729V1.729C24 .774 23.205 0 22.225 0z" />
            </svg>
          </a>
          <a href="https://github.com/shweta123singh" className="hover:text-gray-400" aria-label="GitHub">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.932 0-1.31.467-2.382 1.235-3.222-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.233 1.912 1.233 3.222 0 4.61-2.804 5.629-5.475 5.922.43.37.815 1.102.815 2.222 0 1.606-.014 2.898-.014 3.293 0 .319.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
          </a>
        </div>
      </div>
    </div>

    {/* Footer Bottom */}
    <div className="mt-6 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
      <p>© 2025 JobHunt. Made with ❤️ by Shweta Singh.</p>
    </div>
  </div>
</footer>

    );
}

export default Footer;