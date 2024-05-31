/** @format */

import React, { useState } from "react";
import "./App.css";
import Preview from "./components/Preview";
import Message from "./components/Message";
import NotesContainer from "./components/Notes/NotesContainer";
import NotesList from "./components/Notes/NotesList";
import Note from "./components/Notes/Note";

function App() {
	const [notes, setNotes] = useState([]);
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [selectedNote, setSelectedNote] = useState(null);
	const [creating, setCreating] = useState(false);
	const [editing, setEditing] = useState(false);
	// change titel
	const changeTitelHandler = (event) => {
		setTitle(event.target.value);
	};
	// change content
	const changeContentHandler = (event) => {
		setContent(event.target.value);
	};
	// save new note
	const saveNoteHandler = () => {
		const note = {
			id: new Date(),
			title: title,
			content: content,
		};
		const updateNotes = [...notes, note];

		setNotes(updateNotes);
		setCreating(false);
		setSelectedNote(note.id);
		setTitle("");
		setContent("");
	};

	const selectedNoteHandler = (noteId) => {
		setSelectedNote(noteId);
	};

	const getAddNote = () => {
		return (
			<div>
				<h2>Add a new note</h2>
				<div>
					<input
						type="text"
						name="title"
						className="form-input mb-30"
						placeholder="title"
						value={title}
						onChange={changeTitelHandler}
					/>

					<textarea
						rows="10"
						name="content"
						className="form-input"
						placeholder="content"
						value={content}
						onChange={changeContentHandler}
					/>

					<a href="#" className="button purple" onClick={saveNoteHandler}>
						Save
					</a>
				</div>
			</div>
		);
	};

	const getPreview = () => {
		if (notes.length === 0) {
			return <Message title="There is no notes" />;
		}
		if (!selectedNote) {
			return <Message title="Please choose a note" />;
		}

		const note = notes.find((note) => {
			return note.id === selectedNote;
		});

		return (
			<div>
				<div className="note-operations">
					<a href="#">
						<i className="fa fa-pencil-alt" />
					</a>
					<a href="#">
						<i className="fa fa-trash" />
					</a>
				</div>
				<div>
					<h2>{note.title}</h2>
					<p>{note.content}</p>
				</div>
			</div>
		);
	};
	const addNoteHandler = () => {
		!creating ? setCreating(true) : setCreating(false);
	};
	return (
		<div className="App">
			<NotesContainer>
				<NotesList>
					{notes.map((note) => (
						<Note
							key={note.id}
							title={note.title}
							noteClicked={() => selectedNoteHandler(note.id)}
							active={selectedNote === note.id}
						/>
					))}
				</NotesList>
				<button className="add-btn" onClick={addNoteHandler}>
					+
				</button>
			</NotesContainer>
			<Preview>{creating ? getAddNote() : getPreview()}</Preview>
		</div>
	);
}

export default App;
