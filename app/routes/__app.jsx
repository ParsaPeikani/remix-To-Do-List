import { Outlet } from "@remix-run/react";

import styles from "~/styles/noteForm.css";
import newStyles from "~/styles/NoteList.css";

import NotesHeader from "~/components/navigation/notesHeader";

export default function ExpensesAppLayout() {
  return (
    <div className="over">
      <NotesHeader />
      <Outlet />
    </div>
  );
}

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: newStyles },
  ];
}
