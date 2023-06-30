import { Component } from "react";
import "./Destination.css"
import Mara from "../assets/mara1.avif"
import Mara1 from "../assets/mara2.webp"
import Mara2 from "../assets/mara3.webp"
import Mara3 from "../assets/mara4.webp"

class DestinationData extends Component{
    render(){
        return(
            <div className={this.props.className}>
            <div className="des-text">
                <h2>{this.props.heading}</h2>
                <p>{this.props.text}</p>

            </div>

            <div className="image">
                <img alt="img" src={this.props.img} />
                <img alt="img" src={this.props.img1} />
            </div>
        </div>
        )
    }
}

export default DestinationData