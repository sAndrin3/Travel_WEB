import "./Hero.css";
import { Link } from "react-router-dom";

function Hero(props) {

    return (
      <>
    
      <div className={props.cName}>
      <img src={props.heroImg} alt="HeroImg" />
        {/* <img alt="HeroImg" src="props.heroImg"/> */}

        <div className="hero-text">
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <Link to="/travelplan"
            className={props.btnClass}>
              {props.buttonText}
              </Link>
             </div>
      </div>
      </>
    )
  }
  
  export default Hero