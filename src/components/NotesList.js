import Note from './Note'
import AddNote from './AddNote'
const NotesList = ({notes, handleAddNote,handleDeleteNote})=>{
    return(
        <div className="notes-list">
        {notes.map((note)=><Note id={note.id} handleDeleteNote={handleDeleteNote} date={note.date} text={note.text}/>)}
        <AddNote handleAddNote={handleAddNote}/>
        
    </div>
    )

}

export default NotesList;