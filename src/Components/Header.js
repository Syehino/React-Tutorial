import React from "react";
import Navigation from "./Navigation";
import {Link} from "react-router-dom"

function Header() {
  return (
    <header className="border-b flex justify-between items-center font-bold p-3">
      <Link to ="/">
        <span>AppName</span>
      </Link>

      <Navigation />
    </header>
  );
}

export default Header;
