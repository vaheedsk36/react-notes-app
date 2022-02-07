import React,{useState,useEffect} from 'react'
import './App.css'
import NotesList from './components/NotesList' 
import { nanoid } from 'nanoid';
import Search from './components/Search'
function App() {
  const [notes,setNotes] = useState([]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem(
      'react-notes-app-data'
    ));

    if(savedNotes){
      setNotes(savedNotes);
    }
 
 }, []);


  useEffect(() => {
     localStorage.setItem(
       'react-notes-app-data',
       JSON.stringify(notes)
     )
  
  }, [notes]);
  

  const addNote = (text)=>{
    const date = new Date();
    const newNote = {
      id:nanoid(),
      text:text,
      date:date.toLocaleDateString()
    }

    const newNotes = [...notes,newNote];
    setNotes(newNotes);
  }

  const [searchText,setSearchText] = useState("");
  

  const deleteNotes = (id)=>{
    const newNotes = notes.filter((note)=>note.id !==id);
    setNotes(newNotes);
  }
  return (
    <div className='container'>
      <h1 className="header">Notes App</h1>
      <Search handleSearchNote = {setSearchText}/>
      <NotesList notes = {notes.filter((note)=>note.text.toLowerCase().includes(searchText))} handleAddNote = {addNote} handleDeleteNote = {deleteNotes}/>
    </div>
  );
}

export default App;
