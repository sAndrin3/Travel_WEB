import Hero from "../components/Hero.jsx";
import Navbar from "../components/Navbar.jsx";
import AboutImg from "../assets/night.jpg";
import Footer from "../components/Footer.jsx"
import AboutUs from "../components/AboutUs.jsx";

function About() {
    return (
      <>
        <Navbar />
        <Hero
          cName="hero-mid"
          heroImg={AboutImg}
          title="About"
          btnClass="hide"
        />
        <AboutUs/>
        <Footer/>
      </>
    )
  }
  
  export default About