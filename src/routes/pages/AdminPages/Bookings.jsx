import { useEffect, useState } from 'react';
import axios from 'axios';
import { apiDomain } from '../../../Utils/Utils';

function Bookings() {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await axios.get(`${apiDomain}/bookings`);
      setBookings(response.data.bookings);
    } catch (error) {
      setError(error.message);
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='ap'>
      <div className="bookings">
      <h2>Bookings</h2>
      {bookings.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>User ID</th>
              <th>Tour ID</th>
              {/* <th>Date</th> */}
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.id}</td>
                <td>{booking.userId}</td>
                <td>{booking.tourId}</td>
                {/* <td>{booking.date}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>No bookings found.</div>
      )}
    </div>
    </div>
    
  );
}

export default Bookings;
