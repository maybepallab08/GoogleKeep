import { useState } from 'react'
import './App.css'
import Nav from './Components/Navbar/Nav'
import NoteForm from './Components/NotesInput/NoteForm'
import Siderbar from './Components/Sidebar/Siderbar'

function App() {
  return (
    <div className="App">
      <Nav />
      <Siderbar/>
      <NoteForm/>
    </div>
  )
}

export default App
