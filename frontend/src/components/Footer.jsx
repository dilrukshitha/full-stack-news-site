const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white p-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} DailyScope. All rights reserved.</p>
          <nav className="mt-4">
            <a href="/about" className="hover:underline px-2">About</a>
            <a href="/contact" className="hover:underline px-2">Contact</a>
            <a href="/privacy" className="hover:underline px-2">Privacy Policy</a>
          </nav>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  