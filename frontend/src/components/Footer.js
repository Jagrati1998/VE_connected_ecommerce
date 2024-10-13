// Footer Component with Green Theme
const Footer = () => {
  return (
    <footer className="bg-green-900 text-gray-300 py-8">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Nexcent</h2>
          <p className="mb-4">
            Nexcent is a membership management platform providing cutting-edge solutions for communities worldwide.
          </p>
          <p>&copy; {new Date().getFullYear()} Nexcent. All rights reserved.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-green-300 transition-colors">Home</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-green-300 transition-colors">Features</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-green-300 transition-colors">Community</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-green-300 transition-colors">Blog</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-green-300 transition-colors">Pricing</a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="text-gray-300 hover:text-green-300 transition-colors">
                {/* Facebook Icon */}
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.406.593 24 1.325 24h11.495v-9.294H9.847v-3.62h2.973V8.413c0-2.94 1.793-4.54 4.41-4.54 1.253 0 2.33.093 2.644.135v3.07h-1.813c-1.423 0-1.698.676-1.698 1.668v2.187h3.396l-.443 3.62h-2.953V24h5.787c.73 0 1.325-.594 1.325-1.326V1.326C24 .594 23.406 0 22.675 0z" />
                </svg>
              </a>
            </li>
            {/* Add more social icons as needed */}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer