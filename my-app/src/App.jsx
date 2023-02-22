import { useState } from 'react'
import './App.css'
import Nav from './Components/Navbar/Nav'
import NoteForm from './Components/NotesInput/NoteForm'
import Siderbar from './Components/Sidebar/Siderbar'
import ListContext from './store/listviewContext'

function App() {
  const [viewType,setViewType]=useState(true);
  return (
    <ListContext.Provider value={{
      viewType: viewType,
      setViewtype:function(){
        if (viewType == true) {
          setViewType(false)
        } else {
          setViewType(true)
        }
    }
    }}>
      <div className="App">
        <Nav/>
        <Siderbar />
        <NoteForm />
      </div>
    </ListContext.Provider>
  )
}

export default App
