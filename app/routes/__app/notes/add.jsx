import { redirect } from "@remix-run/node";
import { useNavigate } from "@remix-run/react";

import NotesForm from "~/components/notes/NotesForm";
import Modal from "~/components/utils/Modal";
import { requireUserSession } from "~/data/auth.server";
import { addNote } from "~/data/notes.server";
import { validateNoteInput } from "~/data/validation.server";

export default function AddNotesPage() {
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

export async function action({ request }) {
  const userId = await requireUserSession(request);

  const formData = await request.formData();
  const noteData = Object.fromEntries(formData);

  try {
    validateNoteInput(noteData);
  } catch (error) {
    return error;
  }

  await addNote(noteData, userId);
  return redirect("/notes");
}
