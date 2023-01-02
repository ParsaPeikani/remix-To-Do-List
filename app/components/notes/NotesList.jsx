import NoteListItem from "./NoteListItem";

function NotesList({ notes }) {
  return (
    <ol id="note-list">
      {notes.map((note, index) => (
        <li key={note.id} className="note">
          <div className="ranking">#{index + 1}</div>
          <NoteListItem
            id={note.id}
            title={note.title}
            content={note.content}
            Duedate={note.Duedate}
          />
        </li>
      ))}
    </ol>
  );
}

export default NotesList;
