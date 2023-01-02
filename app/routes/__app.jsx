import { Outlet } from "@remix-run/react";

import styles from "~/styles/noteForm.css";
import NotesHeader from "~/components/navigation/notesHeader";

export default function ExpensesAppLayout() {
  return (
    <>
      <NotesHeader />
      <Outlet />
    </>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
