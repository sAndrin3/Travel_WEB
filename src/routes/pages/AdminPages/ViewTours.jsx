import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './ViewTours.css';
import { apiDomain } from '../../../Utils/Utils';

function ViewTours() {
  const [tours, setTours] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchTours();
  }, []);

  const fetchTours = async () => {
    try {
      const response = await axios.get(`${apiDomain}/tours`);
      setTours(response.data.tours);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleEdit = (TourID) => {
    console.log(`Edit tour with TourID: ${TourID}`);
    navigate(`/admin/createtours/${TourID}`);
  };

  const handleDelete = async (TourID) => {
    console.log(`Delete tour with TourID: ${TourID}`);
    try {
      await axios.delete(`${apiDomain}/tour/${TourID}`);
      fetchTours();
    } catch (error) {
      setError(error.message);
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
          {tours.length > 0 ? (
            tours.map((tour) => (
              <div className="tour-card" key={tour.TourID}>
                <h3>{tour.title}</h3>
                <p>{tour.description}</p>
                <p>Duration: {tour.duration}</p>
                <p>Price: {tour.price}</p>
                <div className="actions">
                  <button onClick={() => handleEdit(tour.TourID)}>Edit</button>
                  <button onClick={() => handleDelete(tour.TourID)}>Delete</button>
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

export default ViewTours;
