import { useState } from "react";

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
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false">
          <use href="src/assets/sicon_menu.svg#menu"></use>
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
