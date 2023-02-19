import React from 'react'
import classes from './Nav.module.css'
import Refresh from './../../assets/refreshicon.svg'
import GoogleApps from './../../assets/googleapps.svg'
import Settings from './../../assets/settingsicon.svg'
import UserIcon from './../../assets/UserIcon.png'
import Hamburger from './../../assets/hamburger.svg'
import ListIcon from './../../assets/listicon.svg'
import GridIcon from './../../assets/gridicon.svg'
import KeepLogo from './../../assets/KeepLogo.png'
import Searchbar from '../../UI/Searchbar'
import { useState } from 'react'
import SettingsDropdown from './SettingsDropdown'

const Nav = () => {
  const [listtype,setlisttype]=useState(false);
  const [settingsState, setSettingsState] = useState(false);
  const settingsDropdown = () => {
    if (settingsState == true) {
      setSettingsState(false)
    } else {
      setSettingsState(true)
    }
  }
  const setListType=()=>{
    setlisttype(listtype?false:true);
    if(listtype){
      
    }
  }



  return (
    <div className={classes.Nav}>
      <div className={classes.navgroup}>
        <img src={Hamburger} className={classes.icons} />
        <img src={KeepLogo} className={classes.keepicon} />
        <div className={classes.brandname}>Keep</div>
      </div>
      <div className={classes.navsearch}>
        <Searchbar />
      </div>
      <div className={classes.navright}>
        <img src={Refresh} className={classes.icons} />
        <img onClick={setListType} src={ListIcon} className={classes.icons} />
        <img
          onClick={settingsDropdown}
          src={Settings}
          className={classes.icons}
        />
        <SettingsDropdown state={settingsState}/>
      </div>
      <div className={classes.navright}>
        <img src={GoogleApps} className={classes.appicon} />
        <img src={UserIcon} className={classes.usericon} />
      </div>
    </div>
  )
}

export default Nav
