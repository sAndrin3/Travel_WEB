import Destination from "../components/Destination.jsx";
import Hero from "../components/Hero.jsx";
import Navbar from "../components/Navbar.jsx";
import Trip from "../components/Trip.jsx";
import Footer from "../components/Footer.jsx"
import { Link } from "react-router-dom";
import vg from "../assets/4.jpg"


function Home() {
  return (
    <>
    <Navbar/>
    <Hero
    cName="hero"
    heroImg={vg}
   // heroImg="https://images.unsplash.com/photo-1629653403102-8033bbaff2bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzE0fHx0cmF2ZWwlMjB0b3VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    title="Your Journey Your Story"
    text="Choose Your Favourite Destination."
    buttonText="Travel plan"
    url="/"
    btnClass="show"
    />
   
    
    <Destination/>
    <Trip/>
    <Footer/>
    </>
  );
}

export default Home