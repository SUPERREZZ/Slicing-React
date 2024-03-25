import logo from "../assets/logo.webp";
import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
const Navbar = ({ homeRef, outletsRef, menuRef, contactRef }) => {
  const [activeLink, setActiveLink] = useState(0);


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // eslint-disable-next-line react/prop-types
      const homeElement = homeRef.current.offsetTop-85;
      // eslint-disable-next-line react/prop-types
      const outletsElement = outletsRef.current.offsetTop-85;
      // eslint-disable-next-line react/prop-types
      const menuElement = menuRef.current.offsetTop-85;
      // eslint-disable-next-line react/prop-types
      const contactElement = contactRef.current.offsetTop-170;
      
      if (scrollPosition >= homeElement && scrollPosition < outletsElement) {
        setActiveLink(0);
      } else if (scrollPosition >= outletsElement && scrollPosition < menuElement) {
        setActiveLink(1);
      } else if (scrollPosition >= menuElement && scrollPosition < contactElement) {
        setActiveLink(2);
      } else if(scrollPosition >= contactElement) {
        setActiveLink(3);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [homeRef, outletsRef, menuRef, contactRef ]);

  const handleClick = (indx, target) => {
    setActiveLink(indx);
    const targeting = document.getElementById(target);
    if (targeting) {
      targeting.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex justify-between w-full position sticky top-0 items-center h-[85px] max-w-full mx-auto px-10 bg-gray-200">
      <div className="flex items-center gap-2">
        <img src={logo} className="w-[75px]" alt="logo" />
        <h2 className="text-black text-3xl ml-4 font-bold uppercase tracking-wider">
          Copii Senja
        </h2>
      </div>
      <ul className="hidden md:flex items-center text-black text-xl tracking-wider gap-10 font-mono">
        <li
          ref={homeRef}
          className={`p-4 hover:border-b hover:border-black duration-300 hover:cursor-pointer hover:text-black hover:font-bold ${
            activeLink === 0 ? "text-gray-500 font-bold border-b border-black" : ""
          }`}
          onClick={() => handleClick(0, "Hero")}
        >
          Home
        </li>
        <li
          ref={outletsRef}
          className={`p-4 hover:border-b hover:border-black duration-300 hover:cursor-pointer hover:text-black hover:font-bold ${
            activeLink === 1 ? "text-gray-500 font-bold border-b border-black" : ""
          }`}
          onClick={() => handleClick(1, "Outlets")}
        >
          Outlets
        </li>
        <li
          ref={menuRef}
          className={`p-4 hover:border-b hover:border-black duration-300 hover:cursor-pointer hover:text-black hover:font-bold ${
            activeLink === 2 ? "text-gray-500 font-bold border-b border-black" : ""
          }`}
          onClick={() => handleClick(2, "Menu")}
        >
          Menu
        </li>
        <li
          ref={contactRef}
          className={`p-4 hover:border-b hover:border-black duration-300 hover:cursor-pointer hover:text-black hover:font-bold ${
            activeLink === 3 ? "text-gray-500 font-bold border-b border-black" : ""
          }`}
          onClick={() => handleClick(3, "Contact")}
        >
          Contact
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
