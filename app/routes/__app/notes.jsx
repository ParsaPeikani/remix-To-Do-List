import { Link, Outlet } from "@remix-run/react";
import { FaPlus } from "react-icons/fa";

export default function NotesPage() {
  // const notes = useLoaderData();
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
      </main>
    </>
  );
}
