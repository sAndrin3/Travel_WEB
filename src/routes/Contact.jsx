import Hero from "../components/Hero.jsx";
import Navbar from "../components/Navbar.jsx";
import AboutImg from "../assets/2.jpg";
import Footer from "../components/Footer.jsx"
import ContactForm from "../components/ContactForm.jsx";

function Contact() {
    return (
      <>
      <Navbar />
        <Hero
          cName="hero-mid"
          heroImg={AboutImg}
          title="Contact"
          btnClass="hide"
        />
        <ContactForm/>
        <Footer/>
      </>
    )
  }
  
  export default Contact