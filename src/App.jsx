import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Explore from "./components/explore/Explore"
import Types from "./components/types/Types"
import Testimonials from "./components/testimonials/Testimonials"
import Contact from "./components/contact/Contact"
import Menu from './components/menu/Menu'
import "./app.scss";
import { useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
     <div className="sections">
       <Intro/>
       <Explore/>
       <Types/>
       <Testimonials/>
       <Contact/>
     </div>
     <ToastContainer />
    </div>
  );
}

export default App;
