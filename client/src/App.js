
import HeroSection from "./Component/HeroSection";
import './App.css';
import {  Route,  Routes } from "react-router-dom";
import Page2 from "./Component/Page2";
import Admin from "./Component/Admin";
import Details from "./Component/Details";


function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/page2" element={<Page2/>}/>
          <Route path="/form" element={<Admin/>}/>
          <Route path="/details/:id" element={<Details />} />
        </Routes>
  
    </div>
  );
}

export default App;
