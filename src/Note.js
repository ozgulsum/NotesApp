import {React,useState} from 'react';
import './App.css';





function Note() {
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
      <div className="container">
        <div className="border text-center">
          <h2>Not Ekle</h2>
          <label className="input-group-text text-center fs-1" htmlFor="title">
            Başlık
          </label>
          <input
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            id="title"
            className="form-control"
          />
          <br />
          <br />
          <br />
          <br />
          <label className="form-control fs-1" htmlFor="description">
            Açıklama
          </label>
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            id="description"
            className="form-control"
          />
          <br />
          {mode === "add" ? (
            <button className="btn btn-success" onClick={newNote}>
              Ekle
            </button>
          ) : (
            <button className="btn btn-primary" onClick={updateNote}>
              Güncelle
            </button>
          )}
          <h2>Notlar</h2>
          {notes.map((i) => {
            return (
              <div className="container" key={i.id}>
                <h3 className="fs-2">{i.title}</h3>
                <p className="fs-3">{i.desc}</p>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteNote(i.id)}
                >
                  Sil
                </button>
                <button className="btn btn-primary" onClick={() => editNote(i)}>
                  Edit
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  export default Note;