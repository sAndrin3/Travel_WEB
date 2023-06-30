import React from 'react';
import './Book.css'

function Book({ tours }) {
  const handleBookTour = (tourId) => {
    // Add logic to handle booking the tour and updating the database
    console.log(`Book tour with ID: ${tourId}`);
  };

  return (
    <div className='up'>
          <div className="user-book-section">
      <h2>Book Tours</h2>
      <div className="tour-cards">
        {tours.map((tour ) => (
          <div className="tour-card" key={tour.id}>
            <h3>{tour.title}</h3>
            <p>{tour.description}</p>
            <div className="tour-card__details">
              <span>Duration: {tour.duration}</span>
              <span>Price: ${tour.price}</span>
            </div>
            <button onClick={() => handleBookTour(tour.id)}>Book Now</button>
          </div>
        ))}
      </div>
    </div>
    </div>
  
  );
}

export default Book;
