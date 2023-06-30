import "./Trip.css"
import TripData from "./TripData";
import Trip1 from "../assets/Trip1.avif"
import Trip2 from "../assets/Trip2.webp"
import Trip3 from "../assets/Trip3.webp"


function Trip() {
    return (
        <div className="trip">
            <h1>Recent Trips</h1>
            <p> You can discover unique destinations using Google Maps.</p>
            <div className="tripcard">
                <TripData
                image={Trip1}
                heading = "Trip to Lake Bogoria"
                text = "Lake Bogoria is a saline, alkaline lake located in a volcanic region in a half-graben basin south of Lake Baringo, Kenya, a little north of the equator.2 It is home to one of the world's largest populations of lesser flamingos due to its ideal conditions.1 The lake is a Ramsar site and Lake Bogoria National Reserve has been a protected National Reserve since November 29, 1973. Lake Bogoria is shallow, about 34 km long by 3.5 km wide, with a drainage basin of 700 km2.2 It is famous for its hot springs, geysers, and huge amounts of blue-green algae that attract hundreds of lesser flamingos on the lake. Lake Bogoria was previously called Lake Hannington, a name it acquired after Bishop James Hannington who visited this alkaline lake in 1885.0"
                />

                <TripData
                image={Trip2}
                heading = "Trip to Fort Jesus"
                text = "The Fort eminently exemplifies a new type of fortification that resulted from the innovations in military and weapons technology that occurred between the 15th and 16th centuries. In its layout and form, the Fort reflects the Renaissance ideal whose architectural proportions and geometric harmony are to be found in the proportions of the human body, while at the same time meeting the functional needs of a modern and well-defended fortification. The original layout of the Fort, despite several changes, has survived almost unchanged over centuries of continued occupations and reoccupations."
                />
                
                <TripData
                image={Trip3}
                heading = "Trip to Thompson's Falls"
                text= "Thompson Falls is a 74-meter waterfall located on the Ewaso Ng'iro river in Central Rift Valley, Kenya. It is situated 3 kilometers from the town of Nyahururu, at an elevation of 2,360 meters.012 The falls are a major economic resource for the adjacent town of Nyahururu, and most of the revenue is received from tourists, both international and domestic, who are charged at the gate.12 Joseph Thomson, a Scottish geologist and naturalist, was the first European to reach the falls in 1883 and named them after his father.1 Tourists can view the falls from above and there is a trail down the bottom of the ravine.0 The falls appeared in the TV Movie The Man in the Brown Suit (1988)."
                />

            </div>
       </div>
    );
}

export default Trip;