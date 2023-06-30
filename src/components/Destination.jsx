import Mara from "../assets/mara1.avif"
import Mara1 from "../assets/mara2.webp"
import Mara2 from "../assets/mara3.webp"
import Mara3 from "../assets/mara4.webp"
import Diani from "../assets/Diani.webp"
import Diani1 from "../assets/Diani1.avif"
import "./Destination.css"
import DestinationData from "./DestinationData"

const Destination = () =>{
    return(
        <div className="destination">
        <h1>Popular Destination</h1>
        <p>Tours give you the opportunity to see and enjoy scenic beauty</p>
        <DestinationData
        className="first-des"
          heading="Masai Mara"
          text="Masai Mara National Reserve is located in south west Kenya and is a vast scenic expanse of gently rolling African savannah plains measuring 1510 square kilometers in area and bordering the Serengeti National Park in Tanzania to the south. Masai Mara is a unique wildlife conservation haven famous for its spectacular natural diversity of wildlife and is the premier Kenya Safari location in East Africa, offering visitors numerous reasons to visit this animal paradise."
          img={Mara}
          img1={Mara1}
        />
         <DestinationData
         className="first-des-reverse"
          heading="Diani Beach"
          text="Diani Beach is a beach resort in Kenya, located 30 km (19 mi) south of Mombasa. Diani has a population of around 100,000 inhabitants and is famous for its white sand beaches, blue ocean and (kite)surfing. The beach is popular for relaxing resorts which are popular with honeymooners, backpackers and families on holiday. The white sand surrounded by abundant forest drives the attention of many nature lovers towards the resorts. Waves near the sea shore attract many adventure lovers towards the destination. The area near the beach is well known for coral reefs, black and white Colobus monkeys and nearly located wildlife reserve named as Shimba Hills National Reserve."
          img={Diani}
          img1={Diani1}
        />
    </div>
    );
}; 

export default Destination