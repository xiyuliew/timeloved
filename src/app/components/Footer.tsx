import React from 'react';

const Footer: React.FC = () => (
  <footer className="text-center py-6 bg-rose-100 text-sm text-rose-800">
    © {new Date().getFullYear()} Timelove. Made with ❤️ for the hopeless romantics.
  </footer>
);

export default Footer;
