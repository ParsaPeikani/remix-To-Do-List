import { Link, Form, useFetcher } from "@remix-run/react";

import styles from "~/styles/NoteList.css";

function NoteListItem({ id, title, content, Duedate }) {
  Duedate = Duedate.slice(0, 10);
  const fetcher = useFetcher();
  function deleteNoteHandler() {
    const proceed = confirm("Are you sure? Do you want to delete this note?");
    if (!proceed) {
      return;
    }
    fetcher.submit(null, { method: "delete", action: `/notes/${id}` });
  }

  if (fetcher.state !== "idle") {
    return (
      <article className="note-item locked">
        <p>Deleting...</p>
      </article>
    );
  }

  return (
    <ul className="note">
      <article>
        <div className="space">
          <button onClick={deleteNoteHandler} className="button-1">
            Delete
          </button>
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
