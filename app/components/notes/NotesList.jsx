import NoteListItem from "./NoteListItem";

function NotesList({ notes }) {
  return (
    <ul id="note-list">
      {notes.map((note, index) => (
        <li key={note.id}>
          <div className="ranking">#{index + 1}</div>
          <NoteListItem
            id={note.id}
            title={note.title}
            content={note.content}
            Duedate={note.Duedate}
          />
        </li>
      ))}
    </ul>
  );
}

export default NotesList;
