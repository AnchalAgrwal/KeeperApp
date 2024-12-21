import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [array, setArray] = useState([]);

  function addNote(note) {
    setArray((prevContent) => {
      return [...prevContent, note];
    });
  }

  function deleteNote(id) {
    setArray((prevContents) => {
      return prevContents.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addItem={addNote} />
      {array.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            delete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
