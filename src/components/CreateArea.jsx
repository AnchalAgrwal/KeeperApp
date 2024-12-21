import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const nam = event.target.name;
    const newValue = event.target.value;

    setNote((prevValue) => {
      return {
        ...prevValue,
        [nam]: newValue,
      };
    });
  }

  function submit(event) {
    props.addItem(note);

    setNote({
      title: "",
      content: "",
    });

    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submit}>
          <AddIcon />
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
