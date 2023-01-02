import { Link } from "@remix-run/react";
// import { redirect } from "@remix-run/node";
// import { deleteNotes } from "~/routes/notes";
// import { getStoredNotes, storeNotes } from "~/data/notes";

import styles from "./NoteList.css";

function NoteList({ notes }) {
  return (
    <ul id="note-list">
      {notes.map((note, index) => (
        <li key={note.id} className="note">
          <div className="space">
            <button className="button-1">Delete</button>
          </div>
          <Link to={note.id}>
            <article>
              <header>
                <ul className="note-meta">
                  <li>#{index + 1}</li>
                  <li>
                    <time dateTime={note.id}>
                      {new Date(note.id).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </time>
                  </li>
                </ul>
                <h2 className="center">{note.title}</h2>
              </header>
              {/* <p>{note.content}</p> */}
            </article>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default NoteList;

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
