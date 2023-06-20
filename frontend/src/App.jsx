import React from 'react'
import Login from './Login'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Dashboard from './Dashboard'
{/*import Lista from './Lista'
import Igenylo from './Igenylo'
import Tagok from './Tagok'
import Logout from './Logout'
import Home from './Home'*/} 

function App() {
  return (
  <BrowserRouter>
    <Routes>
      
      <Route path='/dashboard' element={<Dashboard />}>
      {/*<Route path='/home' element={<Home />}></Route>
        <Route path='/lista' element={<Lista />}></Route>
          <Route path='/igenylo' element={<Igenylo />}></Route>
            <Route path='/tagok' element={<Tagok />}></Route>
           <Route path='/logout' element={<Logout />}></Route>*/} 
      </Route> 
      
      <Route path='/login' element={<Login />}> </Route> 
      </Routes>
   </BrowserRouter>
  );
}
export default App