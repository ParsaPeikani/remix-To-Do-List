import { Link, Outlet, useLoaderData } from "@remix-run/react";
import { getNotes } from "~/data/notes.server";
import NotesList from "~/components/notes/NotesList";
import { FaPlus } from "react-icons/fa";
import { requireUserSession } from "~/data/auth.server";

export default function NotesPage() {
  const notes = useLoaderData();

  const hasNotes = notes && notes.length > 0;

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
        {hasNotes && <NotesList notes={notes} />}
        {!hasNotes && (
          <section id="no-notes">
            <h1>No notes found</h1>
            <p>
              Start <Link to="add">adding some</Link> today.
            </p>
          </section>
        )}
      </main>
    </>
  );
}

export async function loader({ request }) {
  const userId = await requireUserSession(request);

  return getNotes(userId);
}
