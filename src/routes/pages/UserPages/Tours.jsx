import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Tours.css';
import { Context } from '../../../context/userContext/Context';
import { apiDomain } from '../../../Utils/Utils';

function Tours() {
  const { user } = useContext(Context);
  const [tours, setTours] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const fetchTours = async () => {
    try {
      const response = await axios.get(`${apiDomain}/tours`);
      setTours(response.data.tours);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const handleBook = async (TourID) => {
    try {
      if (!user || !user.UserID) {
        // Handle the case where user information is not available
        // console.log('User information is not available.');
        return;
      }
  
      const response = await axios.post(`${apiDomain}/bookings?userId=${user.UserID}`, {
        tour_id:TourID,
        user_id: user.UserID,
      });
  
      if (response.status === 201) {
        console.log('Booking created:', response.data);
        // Show a success message or perform any other actions after successful booking
      } else {
        console.log('Error creating booking:', response.data);
        // Show an error message or perform any other actions in case of booking failure
      }
    } catch (error) {
      console.log('Error creating booking:', error.message);
    }
  };
  

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="ap">
      <div className="view-tours">
        <h2>View Tours</h2>
        <div className="tour-cards">
          {Array.isArray(tours) && tours.length > 0 ? (
            tours.map((tour) => (
              <div className="tour-card" key={tour.id}>
                <h3>{tour.title}</h3>
                <p>{tour.description}</p>
                <p>Duration: {tour.duration}</p>
                <p>Price: {tour.price}</p>
                <div className="actions">
                  <button onClick={() => handleBook(tour.id)}>Book</button>
                </div>
              </div>
            ))
          ) : (
            <div>No tours found.</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Tours;
