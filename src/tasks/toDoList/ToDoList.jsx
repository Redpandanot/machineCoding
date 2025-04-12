import React, { useState } from "react";
import "./ToDoList.css";
import Note from "./Note";

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

  function handleCreate() {
    if (!title.trim()) {
      alert("Title cannot be empty.");
      return;
    }
    const id = Date.now();
    setnotes([...notes, { id, title, description, status: false }]);
    setTitle("");
    setDescription("");
  }

  function handleDelete(id) {
    const newNotes = notes.filter((note) => note.id !== id);
    setnotes([...newNotes]);
  }

  function handleStatus(id) {
    const newNotes = notes.map((note) =>
      note.id === id ? { ...note, status: !note.status } : note
    );
    setnotes(newNotes);
  }

  function handleUpdate(newNote) {
    const newNotes = notes.map((note) =>
      note.id === newNote.id ? { ...newNote } : note
    );
    setnotes(newNotes);
  }

  return (
    <div className="create-container">
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
        <button className="add" onClick={handleCreate}>
          Add
        </button>
      </div>
      {notes.length === 0 ? (
        <div className="empty">No tasks yet. Add your first one!</div>
      ) : (
        <Note
          notes={notes}
          handleDelete={handleDelete}
          handleStatus={handleStatus}
          handleUpdate={handleUpdate}
        />
      )}
    </div>
  );
}

export default ToDoList;
