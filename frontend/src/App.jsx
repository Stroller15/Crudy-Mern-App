import "./App.css"

// Components
import AddUser from './components/AddUser';
import NavBar from './components/NavBar';
import Crudy from './components/Crudy';
import AllUser from './components/AllUser';

import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Crudy/>}/>
          <Route path="/add" element={<AddUser />}/>
          <Route path="/all" element={<AllUser />}/>
        </Routes>
      </BrowserRouter>
     
        
    </div>
  )
}

export default App
