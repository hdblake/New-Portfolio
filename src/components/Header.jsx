import { useState } from "react";
import { NavLink } from "react-router-dom";
import lgLogo from "../images/hunter-logo-lg.webp";
import smLogo from "../images/hunter-logo-sm.webp";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="p-4 relative">
      <div>
        <div className="absolute top-5 md:top-4 lg:top-6">
          <img
            src={lgLogo}
            srcSet={`${smLogo} 768w, ${lgLogo} 3080w`}
            alt="logo"
            className="logo"
            width={240}
            height={43}
          />
        </div>
        <nav
          id="navbar"
          className="absolute right-5 top-5 md:top-[22px] lg:top-[29px]"
        >
          <div className="flex flex-col items-end gap-x-2">
            <div className="hamburger" onClick={toggleMenu}>
              <div className={`line ${isOpen ? "open" : ""}`}></div>
              <div className={`line ${isOpen ? "open" : ""}`}></div>
              <div className={`line ${isOpen ? "open" : ""}`}></div>
            </div>
            <div className={`menu ${isOpen ? "open" : ""}`}>
              <ul className="navigation flex flex-col md:flex-row gap-x-4">
                <li className="font-mainText text-accent text-xl md:text-2xl hover:underline hover:decoration-2 hover:decoration-primary">
                  <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li className="font-mainText text-accent text-xl md:text-2xl hover:underline hover:decoration-2 hover:decoration-primary">
                  <NavLink
                    to="/about"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li className="font-mainText text-accent text-xl md:text-2xl hover:underline hover:active:no-underline hover:decoration-2 hover:decoration-primary">
                  <NavLink
                    to="/skills"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                  >
                    Skills
                  </NavLink>
                </li>
                <li className="font-mainText text-accent text-xl md:text-2xl hover:underline hover:decoration-2 hover:decoration-primary">
                  <NavLink
                    to="/projects"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                  >
                    Projects
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
