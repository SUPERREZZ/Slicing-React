
import Contact from "./components/ConectionToMe"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Menu from "./components/Menu"
import Navbar from "./components/Navbar"
import Outlets from "./components/Outlets"
import { useRef } from "react";

const App = () => {
  const homeRef = useRef(null);
  const outletsRef = useRef(null);
  const menuRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <div className=" w-full bg-gray-200">
      <Navbar homeRef={homeRef} outletsRef={outletsRef} menuRef={menuRef} contactRef={contactRef} />
      <Hero homeRef={homeRef}/>
      <Outlets outletRef={outletsRef}/>
      <Menu menuRef={menuRef}/>
      <Contact contactRef={contactRef}/>
      <Footer/>
    </div>
  )
}

export default App
