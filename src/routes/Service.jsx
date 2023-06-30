import Hero from "../components/Hero.jsx";
import Navbar from "../components/Navbar.jsx";
import AboutImg from "../assets/1.jpg";
import Footer from "../components/Footer.jsx"
import Trip from "../components/Trip.jsx"

function Service() {
    return (
      <>
         <Navbar />
        <Hero
          cName="hero-mid"
          heroImg={AboutImg}
          title="Service"
          btnClass="hide"
        />
        <Trip/>
        <Footer/>
      </>
    )
  }
  
  export default Service