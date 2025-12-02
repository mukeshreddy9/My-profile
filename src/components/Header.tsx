import React from "react";
import { Link } from "react-router-dom";

const profileImage = "/mnt/data/863db4d4-ba83-4467-8bea-030cc99fcae1.png";

const Header: React.FC = () => {
  return (
<header className="bg-gradient-to-r from-[#0b1220] to-[#081426] text-slate-100 py-3 px-4">
  <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 flex-nowrap overflow-x-auto sm:flex-wrap box-border">

    {/* Left: Name + Subtitle in one line */}
    <div className="flex items-center gap-3 min-w-fit">
      <div className="min-w-0">
        <div className="text-[10px] sm:text-sm md:text-base font-bold leading-tight truncate whitespace-nowrap">
          Mukesh Reddy Theddu — Full Stack Developer & ERP Specialist
        </div>
      </div>
    </div>

    {/* Right: Links + Resume */}
    <div className="flex items-center gap-2 min-w-fit whitespace-nowrap">

      <nav className="flex gap-2 items-center">
        <Link to="/" className="text-xs sm:text-base hover:underline px-1">Home</Link>
        <Link to="/about" className="text-xs sm:text-base hover:underline px-1">About</Link>
        <Link to="/contact" className="text-xs sm:text-base hover:underline px-1">Contact</Link>
      </nav>

      <a
        href="assets/Profile.pdf"
        className="ml-2 px-2 py-1 sm:px-3 sm:py-2 rounded-md bg-gradient-to-r from-purple-500 to-cyan-400 text-black text-[10px] sm:text-sm font-semibold"
      >
        Download Resume
      </a>
    </div>
  </div>
</header>


  );
};

export default Header;
