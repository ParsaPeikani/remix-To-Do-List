// /expenses/<some-id> => /expenses/expense-1, /expenses/e-1
import { useNavigate } from "@remix-run/react";

import { validateNoteInput } from "~/data/validation.server";
import NotesForm from "~/components/notes/NotesForm";
import Modal from "~/components/utils/Modal";
import { updateNote, deleteNote } from "~/data/notes.server";
import { redirect } from "@remix-run/node";

export default function UpdateExpensesPage() {
  const navigate = useNavigate();

  function closeHandler() {
    // navigate programmatically
    navigate("..");
  }
  return (
    <Modal onClose={closeHandler}>
      <NotesForm />
    </Modal>
  );
}

export async function action({ params, request }) {
  const noteId = params.id;

  if (request.method === "PATCH") {
    const formData = await request.formData();
    const noteData = Object.fromEntries(formData);

    try {
      validateNoteInput(noteData);
    } catch (error) {
      return error;
    }

    await updateNote(noteId, noteData);
    return redirect("/notes");
  } else {
    await deleteNote(noteId);
    return redirect("/notes");
  }
}
