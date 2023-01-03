import { requireUserSession } from "~/data/auth.server";
export default function NotesAnalysisPage() {
  return (
    <main>
      <h1>Notes Analysis Page</h1>
    </main>
  );
}

export async function loader({ request }) {
  await requireUserSession(request);
}
