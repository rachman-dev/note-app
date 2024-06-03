import React from "react";
import "../../App.css";
import "../../index.css";
const NoteForm = (props) => {
  const {
    formTitle,
    title,
    content,
    titleChanged,
    contentChanged,
    submitClicked,
    submitText,
  } = props;
  return (
    <div>
      <h2>{formTitle}</h2>
      <div>
        <input
          type="text"
          name="title"
          className="form-input mb-30"
          placeholder="title"
          value={title}
          onChange={titleChanged}
        />

        <textarea
          rows="10"
          name="content"
          className="form-input"
          placeholder="content"
          onChange={contentChanged}
          value={content}
        />

        <a href="#" className="button purple" onClick={submitClicked}>
          {submitText}
        </a>
      </div>
    </div>
  );
};

export default NoteForm;
