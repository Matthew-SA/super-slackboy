import React from 'react';
import RightbarHeader from './rightbar_header/rightbar_header';
import RightbarMain from './rightbar_main/rightbar_main'
import { Route } from 'react-router-dom'


function Rightbar() {

  return(
      <div className="rightbar-container">
        <Route path='/app/channels/:id' component={RightbarHeader}/>
        <Route path='/app/channels/:id'component={RightbarMain}/>
      </div>
  )
}

export default Rightbar;