import React, { useState } from "react";
import "./ToDoList.css";

//to do list should have crud oprations

//enter new notes
//  -title
//  -content
//  -add button done
//notes display
//  -edit button
//  -delete button done
//  -status button done

function ToDoList() {
  const [notes, setnotes] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Pending");
  const [edit, setEdit] = useState(null);

  function handleCreate() {
    const id = notes.length + 1;
    setnotes([...notes, { id, title, description, status: "Pending" }]);
    setTitle("");
    setDescription("");
  }

  function handleUpdate(id) {
    const newNotes = notes.map(
      (note) =>
        note.id === id && {
          id: note.id,
          title,
          description,
          status,
        }
    );
    setnotes(newNotes);
    setEdit(null);
  }

  function handleEdit(note) {
    setTitle(note.title);
    setDescription(note.description);
    setEdit(note.id);
  }

  function handleDelete(id) {
    const newNotes = notes.filter((note) => note.id !== id);
    setnotes([...newNotes]);
  }

  function handleStatus(id) {
    const newNotes = notes.map((note) =>
      note.id === id
        ? note.status === "Pending"
          ? { ...note, status: "Completed" }
          : { ...note, status: "Pending" }
        : note
    );
    setnotes(newNotes);
  }

  return (
    <div>
      <div className="create-container">
        <div className="create-note">
          <input
            className="title"
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="title"
          />
          <input
            className="description"
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            placeholder="description"
          />
          <button className="add" onClick={handleCreate}>
            Add
          </button>
        </div>
      </div>
      <div className="view-notes">
        {notes.length === 0 && <div className="empty">Empty</div>}
        {notes.map((note) => (
          <>
            {edit !== note.id ? (
              <div key={note.id} className="view-note">
                <div className="title">{note.title}</div>
                <div className="description">{note.description}</div>
                <button className="update" onClick={() => handleEdit(note)}>
                  Edit
                </button>
                <button
                  className="delete"
                  onClick={() => handleDelete(note.id)}
                >
                  Delete
                </button>
                <button
                  className="status"
                  onClick={() => handleStatus(note.id)}
                >
                  {note.status}
                </button>
              </div>
            ) : (
              <div className="create-note">
                <input
                  className="title"
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  placeholder="title"
                  value={title}
                />
                <input
                  className="description"
                  onChange={(e) => setDescription(e.target.value)}
                  type="text"
                  placeholder="description"
                  value={description}
                />
                <button
                  className="status"
                  onClick={() => {
                    handleStatus(note.id);
                    setStatus(note.status);
                  }}
                >
                  {note.status}
                </button>
                <button className="add" onClick={() => handleUpdate(note.id)}>
                  Update
                </button>
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
}

export default ToDoList;
