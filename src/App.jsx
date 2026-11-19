import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cars from "./components/Cars";
import Contact from "./components/Contact";
import "./App.css";
function App(){
  return(
    <div className="app.">
<Navbar/>
      <Hero/>
      <Cars/>
      <Contact/>
    </div>
  )
}

export default App;