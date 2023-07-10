import { useState } from "react";
import HamburgerMenuIcon from "../assets/icon_menu.svg";

export default function HamburgerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function onMenuClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <nav className="group relative sm:hidden">
      <button onClick={onMenuClick} aria-expanded="false" aria-controls="menu">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g id="vuesax/linear/menu">
            <g id="vuesax/linear/menu_2">
              <g id="menu" width="24" height="24" viewBox="0 0 24 24">
                <path
                  id="Vector"
                  d="M3 7H21"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  id="Vector_2"
                  d="M3 12H21"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  id="Vector_3"
                  d="M3 17H21"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </g>
            </g>
          </g>
        </svg>
      </button>
      <ul
        className={`absolute ${
          isMenuOpen ? "block" : "hidden"
        } top-6 -translate-x-[80%] border-[1px] rounded p-2 leading-7 whitespace-nowrap`}>
        <li className="hover:bg-gray-100 cursor-pointer">What is Launch?</li>
        <li className="hover:bg-gray-100 cursor-pointer">Pricing</li>
        <li className="hover:bg-gray-100 cursor-pointer">FAQ</li>
      </ul>
    </nav>
  );
}
