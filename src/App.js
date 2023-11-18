import {React,useState} from 'react';
import Note from './Note';
import './App.css';


function App() {
  const [newTitle, setNewTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [notes, setNotes] = useState([]);
  const [id, setId] = useState(0);
  const [editId, setEditId] = useState();
  const [mode, setMode] = useState("add");

  const newNote = () => {
    if (newTitle && desc) {
      setId(id + 1);
      setNotes([...notes, { id: id, title: newTitle, desc: desc }]);
      setNewTitle("");
      setDesc("");
    }
  };
  const deleteNote = (id) => {
    setNotes(notes.filter((i) => i.id !== id));
  };
  const editNote = (i) => {
   
    setNewTitle(i.title);
    setDesc(i.desc);
    setEditId(i.id);
    setMode("edit");
  };
  const updateNote = () => {
    const newNotes = notes.map((i) => {
      return i.id === editId ? { title: newTitle, desc: desc, id: editId } : i;
    });
    setNotes(newNotes);
    setDesc("");
    setNewTitle("");
    setEditId("");
    setMode("add");
  };
  
  return (
    <div className="App">
    <Note/>
    <div className='row'>
    <Note Note={Note}/>
    </div>
    </div>
  );
  };

  
  


export default App;




















