import React from 'react'
import ReactDOM from 'react-dom/client'
import One from './App.jsx'
import One2nd from './App1-2nd.jsx'
import Two from './App2.jsx'
import Three from './App3.jsx'
import Four from './App4.jsx'
import Three2nd from './App3-2nd.jsx'
import Nav from './Nav.jsx'
import './index.css'
import './App.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav/>

    <div className='first'>
    <One/>
    <Three/>
    </div>


   <div className='second'>
    <div>
    <Two/>
    <Three2nd/>
      <Four/>
    </div>
    <div>
    <Two/>

      <Four/>
    <Three2nd/>
    </div>
    <div>
    <Two/>

    <Three2nd/>
      <Four/>
    </div>
      
   </div>


   <div className='third'>
    <One2nd/>
    <One2nd/>
    <One2nd/>
    <One2nd/>
    <One2nd/>

   </div>
    <Nav/>

  </React.StrictMode>,
)
