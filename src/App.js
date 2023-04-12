import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, {useState} from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from "./components/Home";
import AllRestautants from "./components/AllRestautants";
import Restaurant from "./components/Restaurant";
import Meal from "./components/Meal";
import About from "./components/About";




function App() {
  const [selectRestaurant, setSelectRestaurant] = useState([]);
  const [selectMeal, setSelectMeal] = useState();


  return (
    <Router>
    
    <Header  />
    
    
    <Routes>
      <Route path="/"  element={ <Home /> }/>

      <Route path="/allrestaurants" element={ <AllRestautants setSelectRestaurant={setSelectRestaurant} /> }/>
    
      <Route path="/allrestaurants/Restaurant" element={ <Restaurant selectRestaurant={selectRestaurant} setSelectMeal={setSelectMeal}/> }/>

      
       <Route path="/meal" element={ <Meal selectMeal={selectMeal} /> }/>

       <Route path="/about" element={ <About /> }/>
    </Routes>

    <Footer />
  </Router>
  );
}

export default App;
//export default Authenticator(App);
