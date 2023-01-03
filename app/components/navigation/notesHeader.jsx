import { NavLink, Form } from "@remix-run/react";

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
            <label>Sort you Notes: </label>
            <Form className="drop-down">
              <br></br>
              <select name="cars" id="drop-down">
                <option value="A-Z">Name(A-Z)</option>
                <option value="SL">Soonest DueDates</option>
                <option value="Z-A">Name(Z-A)</option>
                <option value="LS">latest DueDates</option>
              </select>
            </Form>
          </li>
        </ul>
      </nav>
      <nav id="cta-nav">
        <Form method="post" action="logout">
          <button className="cta">Logout</button>
        </Form>
      </nav>
    </header>
  );
}

export default NotesHeader;
