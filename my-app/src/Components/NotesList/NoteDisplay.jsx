import React from 'react'
import classes from './NoteDisplay.module.css';

const NoteDisplay = props => {
  return (
    <div className={classes.noteBox}>
      {props.note}
    </div>
  )
}

export default NoteDisplay
