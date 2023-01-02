import {
  Form,
  Link,
  useActionData,
  useMatches,
  useParams,
  useTransition as useNavigation,
} from "@remix-run/react";
import styles from "~/styles/noteForm.css";

function NotesForm() {
  const validationErrors = useActionData();
  const navigation = useNavigation();

  const params = useParams();
  const matches = useMatches();
  const notes = matches.find((match) => match.id === "routes/__app/notes").data;
  const noteData = notes.find((note) => note.id === params.id);

  if (params.id && !noteData) {
    return <p>Invalid note Id.</p>;
  }

  const defaultValues = noteData
    ? {
        title: noteData.title,
        content: noteData.content,
        Duedate: noteData.Duedate,
      }
    : {
        title: "",
        content: "",
        Duedate: "",
      };

  const isSubmitting = navigation.state !== "idle";
  return (
    <Form method="post" id="note-form">
      <p>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          required
          maxLength={30}
          defaultValue={defaultValues.title}
        />
      </p>
      <p>
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          name="content"
          rows="5"
          required
          defaultValue={defaultValues.content}
        />
      </p>
      <p>
        <label htmlFor="date">Due Date</label>
        <input
          type="date"
          id="date"
          name="date"
          required
          defaultValue={
            defaultValues.Duedate ? defaultValues.Duedate.slice(0, 10) : ""
          }
        />
      </p>
      {validationErrors && (
        <ul>
          {Object.values(validationErrors).map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      )}
      <div className="form-actions">
        <button disabled={isSubmitting}>
          {isSubmitting ? "Adding..." : "Add Note"}
        </button>
        <Link to="..">Cancel</Link>
      </div>
    </Form>
  );
}

export default NotesForm;

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
