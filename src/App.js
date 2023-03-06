// import logo from './logo.svg';
import React from 'react';
import './CSS/App.css';
import './CSS/Login.css';
// import PetCard from './componets/Petcard';
// import Search from './componets/Search';
// import PetCard from './componets/Petcard';
// import Search from './componets/Search';
import Mypets from './models/Mypets';
import AllPets from './models/Allpets';
// import Navbar from './views/Navbar';
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Register from './models/Register';
// import AddPet from './componets/AddPets';
import Login from './models/Login';



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/Login" element={<Login/>}/>
        <Route exact path="/" element={<Register/>}/>
        <Route exact path="/mypets" element={<Mypets/>}/>
        <Route exact path="/allpets" element={<AllPets/>}/>
      </Routes>
    </Router>
  );
}

export default App;
