import { useContext } from "react"
import { Context } from "../context/userContext/Context"

function TravelPlan() {
  let USER = JSON.parse(localStorage.getItem("user"))
  console.log(USER)
  return (
    <div>
      <h2>Name</h2>
      <p>{USER.Name}</p>
      <h2>Email</h2>
      <p>{USER.Email}</p>
      p
    </div>
  )
}

export default TravelPlan