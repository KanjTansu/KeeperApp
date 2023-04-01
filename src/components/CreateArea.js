import React from "react";
import AddIcon from '@mui/icons-material/Add';
import { Fab } from "@mui/material";
import Zoom from '@mui/material/Zoom';
export default function CreateArea(props) {
    const [noteInput, setNoteInput] = React.useState({
        title: "",
        content: "",
    });
    const [isExpand,setExpand] = React.useState(false)
    function handleChange(event) {
        const { value, name } = event.target
        setNoteInput((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            }
        });
    }
    function submitNote(event) {
        props.addNote(noteInput)
        setNoteInput({
            title: "",
            content: "",
        })
        event.preventDefault();
    }
    function getNote() {
        setExpand(true)
    }
    return (
        <div >
            <form className="create-note">
                {isExpand?<input onChange={handleChange} value={noteInput.title} name="title" placeholder="Title" />:null}
                <textarea 
                    onClick={getNote}
                    onChange={handleChange}
                    value={noteInput.content}
                    name="content"
                    placeholder="Take a note..."
                    rows={isExpand?"3":"1"}/>
                <Zoom in={isExpand}><Fab onClick={submitNote}> <AddIcon /></Fab></Zoom>
            </form>
        </div>
    );
}