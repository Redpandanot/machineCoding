import React, { useState } from "react";
import "./ToDoList.css";

function Note({ notes, handleDelete, handleStatus, handleUpdate }) {
  const [edit, setEdit] = useState(null);
  const [titleUpdate, setTitleUpdate] = useState("");
  const [descriptionUpdate, setDescriptionUpdate] = useState("");
  const [statusUpdate, setStatusUpdate] = useState(false);

  function handleEdit(note) {
    setEdit(note.id);
    setTitleUpdate(note.title);
    setDescriptionUpdate(note.description);
    setStatusUpdate(note.status);
  }

  return (
    <div className="view-notes">
      {notes.map((note) => (
        <div
          key={note.id}
          className={`view-note ${note.status ? "completed" : ""}`}
        >
          {edit !== note.id ? (
            <>
              <div className="title" onDoubleClick={() => handleEdit(note)}>
                {note.title}
              </div>
              <div
                className="description"
                onDoubleClick={() => handleEdit(note)}
              >
                {note.description}
              </div>
              <button className="update" onClick={() => handleEdit(note)}>
                Edit
              </button>
              <button className="delete" onClick={() => handleDelete(note.id)}>
                Delete
              </button>
              <button className="status" onClick={() => handleStatus(note.id)}>
                {note.status ? "Completed" : "Pending"}
              </button>
            </>
          ) : (
            <div className="create-note">
              <input
                className="title"
                type="text"
                value={titleUpdate}
                onChange={(e) => setTitleUpdate(e.target.value)}
              />
              <input
                className="description"
                type="text"
                value={descriptionUpdate}
                onChange={(e) => setDescriptionUpdate(e.target.value)}
              />
              <button
                className="status"
                onClick={() => setStatusUpdate(!statusUpdate)}
              >
                {statusUpdate ? "Completed" : "Pending"}
              </button>
              <button
                className="update"
                onClick={() => {
                  const id = note.id;
                  handleUpdate({
                    id,
                    title: titleUpdate,
                    description: descriptionUpdate,
                    status: statusUpdate,
                  });
                  setEdit(null);
                }}
              >
                Update
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Note;
