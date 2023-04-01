import "./styles.css";
import Header from "./header"
import Footer from "./footer";
import Note from "./Note"
import CreateArea from "./CreateArea";
import React from "react";

export default function App() {
  const [note, setNote] = React.useState([]);
  function addNote(noteInput) {
    setNote((prevValue => {
      return [...prevValue,
        noteInput
      ]
    }))
  }
  function deleteItem(id) {
    setNote(prevValue => {
      return prevValue.filter(
        (item, index) => {
          return index !== id
        }
      )
    })
  }

  return (
    <div>
      <Header />
      <CreateArea
        addNote={addNote}
      />
      {note.map((item, index) => (
        <Note
          key={index}
          id={index}
          title={item.title}
          content={item.content}
          deleteItem={deleteItem}
        />))}
      <Footer />
    </div>
  );
}
