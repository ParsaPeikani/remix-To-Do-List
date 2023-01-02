import { Link, Form } from "@remix-run/react";

import styles from "~/styles/NoteList.css";

function NoteListItem({ id, title, content, Duedate }) {
  Duedate = Duedate.slice(0, 10);
  return (
    <ul className="note">
      <article>
        <div className="space">
          <Form method="delete">
            <button className="button-1">Delete</button>
          </Form>
          <Link to={id}>
            <button className="button-1">Edit</button>
          </Link>
        </div>
        <header>
          <ul className="note-meta">
            <li>
              <time dateTime={id}>Due {Duedate}</time>
            </li>
          </ul>
          <h2 className="center">{title}</h2>
        </header>
        {/* <p>{note.content}</p> */}
      </article>
    </ul>
  );
}

export default NoteListItem;

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
