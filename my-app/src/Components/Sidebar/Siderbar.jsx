import React from 'react'
import classes from './Siderbar.module.css'
import Bulb from './../../assets/bulb.svg';
import Notification from './../../assets/notification.svg';
import Edit from './../../assets/edit.svg';
import Archive from './../../assets/archive.svg';
import Trash from './../../assets/trash.svg';

const Siderbar = () => {
  return (
    <div className={classes.sidebar}>
      <img className={classes.sidebarIcons} src={Bulb}/>
      <img className={classes.sidebarIcons} src={Notification}/>
      <img className={classes.sidebarIcons} src={Edit}/>
      <img className={classes.sidebarIcons} src={Archive}/>
      <img className={classes.sidebarIcons} src={Trash}/>
    </div>
  )
}

export default Siderbar
