import { Link, Outlet, useLoaderData } from "@remix-run/react";
import { getNotes } from "~/data/notes.server";
import NotesList from "~/components/notes/NotesList";
import { FaPlus } from "react-icons/fa";

const Dummy_Notes = [
  {
    id: "e1",
    title: "Studying for Chemistryhghghghg",
    content: "CHert o Pert",
    Duedate: new Date().toISOString().slice(0, 10),
    index: null,
  },
  {
    id: "e2",
    title: "R",
    content: "Gholamreza",
    Duedate: new Date().toISOString().slice(0, 10),
    index: null,
  },
];

export default function NotesPage() {
  const notes = useLoaderData();

  return (
    <>
      <Outlet />
      <main>
        <section id="notes-actions">
          <Link to="add">
            <FaPlus />
            <span>Add Notes</span>
          </Link>
        </section>
        <NotesList notes={notes} />
      </main>
    </>
  );
}

export function loader() {
  return getNotes();
}
