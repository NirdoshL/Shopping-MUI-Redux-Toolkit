import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import "./App.css"
import Home from "./Pages/home.d";
import ErrorScreen from "./Pages/noPath.d";
import About from "./Pages/about.d";
import Contact from "./Pages/contact.d";
import {CartView} from "./Components/index.d";



function App() {
  return (
    <div className="App">
      <Router>
         <Routes>
            <Route path="/" element={<Home/>}/> 
            <Route path="/about" element={<About/>}/> 
            <Route path="/contact" element={<Contact/>}/> 
            <Route path="/cart" element={<CartView/>}/> 
            <Route path="*" element={<ErrorScreen/>}/> 
         </Routes>
      </Router>
    </div>
  );
}

export default App;
