import { NavLink } from "@remix-run/react";

import Logo from "../utils/logo";

function NotesHeader() {
  return (
    <header id="main-header">
      <Logo />
      <nav id="main-nav">
        <ul>
          <li>
            <NavLink to="/notes" end>
              Manage Notes
            </NavLink>
          </li>
          <li>
            <NavLink to="/notes/analysis">Analyze Notes</NavLink>
          </li>
        </ul>
      </nav>
      <nav id="cta-nav">
        <button className="cta">Logout</button>
      </nav>
    </header>
  );
}

export default NotesHeader;
