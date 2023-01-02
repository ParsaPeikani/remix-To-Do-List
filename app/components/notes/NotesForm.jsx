import {
  Form,
  Link,
  useActionData,
  useTransition as useNavigation,
} from "@remix-run/react";
import styles from "~/styles/noteForm.css";

function NotesForm() {
  const validationErrors = useActionData();
  const navigation = useNavigation();

  const isSubmitting = navigation.state !== "idle";
  return (
    <Form method="post" id="note-form">
      <p>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" required maxLength={30} />
      </p>
      <p>
        <label htmlFor="content">Content</label>
        <textarea id="content" name="content" rows="5" required />
      </p>
      <p>
        <label htmlFor="date">Due Date</label>
        <input type="date" id="date" name="date" required />
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
