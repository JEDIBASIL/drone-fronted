import React, { useEffect, useReducer, useState } from 'react'
import { Outlet } from 'react-router-dom'
import TopBar from './TopBar'
import SideBar from './SideBar'
import '../../App.css'





const reducer = (state, actions) => {
  switch (actions.type) {
    case "key1": return { key1: state.key1 = true, key2: state.key2, slide: state.slide }
    case "key2": return { key1: state.key1, key2: state.key2 = true, slide: state.slide }
    case "switchBoth": return { key1: state.key1 = false, key2: state.key2 = false, slide: state.slide }
    case "switchBothToTrue": return { key1: state.key1 = true, key2: state.key2 = true, slide: state.slide }
    case "toggleSlide": return { key1: state.key1, key2: state.key2, slide: !state.slide }
    case "normalSlide": return { key1: state.key1, key2: state.key2, slide: state.slide = true }
    case "showSlide": return { key1: state.key1, key2: state.key2, slide: state.slide = false }
  }
}

const AdminApp = () => {
  const [state, dispatch] = useReducer(reducer, { key1: false, key2: false, slide: false })
  const handleEvent = (e) => {
    console.log(e.keyCode);
    // e.keyCode === 17 && dispatch({ type: 'key1' })
    // e.keyCode === 86 && dispatch({ type: 'key2' })
    if(state.key1 === true && state.key2 === true){
      e.keyCode === 17 && dispatch({ type: 'toggleSlide' })
    }
  }


  const [state2, setState2] = useState(false)
  const checked = () => {
    if (state.key1 === true && state.key2 === true) setState2(true)
    else {
      setState2(false)
      dispatch({ type: "normalSlide" })
    }
    console.log(state.slide);
  }

  // const [slide, setSlide] = useState()


  return (
    <div tabIndex={'0'}
      onKeyDown={handleEvent}
      onKeyUp={checked}
      className="adminApp">
      <SideBar barDisplay={state2} state={state} changeDisplay={dispatch} />
      <div className="container">
        <TopBar switchState={dispatch} switchDisplay={checked} state={state} />
        <div  onClick={(e) => {
                e.target.classList[0] !== "switchIcon"?  dispatch({ type: "normalSlide" }):dispatch({ type: "showSlide" })
                   
            }} className="content">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AdminApp