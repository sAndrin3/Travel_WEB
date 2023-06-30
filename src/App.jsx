import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import Register from './routes/Register';
import TravelPlan from './routes/TravelPlan';
import Login from "./routes/Login"
import AdminDashboard from './routes/pages/AdminPages/AdminDashboard'
import UserDashboard from './routes/pages/UserPages/UserDashboard'
import AdminProfile from './routes/pages/AdminPages/AdminProfile'
import ViewTours from './routes/pages/AdminPages/ViewTours'
import CreateTours from './routes/pages/AdminPages/CreateTours'
import Bookings from './routes/pages/AdminPages/Bookings'
import Messages from './routes/pages/AdminPages/Messages';
import Navbar from './components/Navbar'
import UserProfile from './routes/pages/UserPages/UserProfile';
import Tours from './routes/pages/UserPages/Tours';
import Book from './routes/pages/UserPages/Book'
import Message from './routes/pages/UserPages/Message';

function App() {
  let USER = JSON.parse(localStorage.getItem("user"))

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/service" element={<Service/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/travelplan" element={USER ? <TravelPlan/> : Home}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/user" element={<UserDashboard/>}>
              <Route path="profile" element={<UserProfile/>}/>
             <Route path="tours" element={<Tours/>}/>
             <Route path="message" element={<Message/>}/>
             <Route path="book" element={<Book/>}/>
          </Route>
          <Route path="/admin" element={<AdminDashboard/>}>
             <Route path="profile" element={<AdminProfile/>}/>
             <Route path="/admin/createtours/:TourID" element={<CreateTours />} />
             <Route path="viewtours" element={<ViewTours/>}/>
             <Route path="createtours" element={<CreateTours/>}/>
             <Route path="bookings" element={<Bookings/>}/>
             <Route path="messages" element={<Messages/>}/>
          </Route>
          
        </Routes>
        {/* <Footer/> */}
        </BrowserRouter>
    </div>
  );
}

export default App
