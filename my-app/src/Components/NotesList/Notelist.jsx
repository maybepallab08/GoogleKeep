import React from 'react'
import { useState } from 'react'
import NoteDisplay from './NoteDisplay'
import classes from './Notelist.module.css';

const Notelist = props => {
return <div className={classes.noteContainer}>
    {props.notes.map((note)=><NoteDisplay key={note} note={note} />)}
</div>
}

export default Notelist
