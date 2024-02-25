import React from "react";
import Loginpage from './Loginpage';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Register from './Register';
import Home from './Home';
function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Loginpage/>}></Route>
        <Route path='/Register' element={<Register/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
      </Routes>
      </BrowserRouter>
  )
}

export default App;
