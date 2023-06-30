import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import './CreateTours.css';
import { apiDomain } from '../../../Utils/Utils';

function CreateTours() {
  const location = useLocation();
  const [tours, setTours] = useState([]);
  const { TourID } = useParams();
  // console.log(TourID);
  const navigate = useNavigate();

  const [tourData, setTourData] = useState({
    title: '',
    description: '',
    duration: '',
    price: ''
  });

  // let pathname = location.pathname.split('/')[3];
  // console.log(pathname);
  const tour = tours.find((tour) => tour.TourID == TourID);

  useEffect(() => {
    getaData();
    if (TourID) {
      // Fetch the tour details if TourID exists
      fetchTourDetails();
    }
  }, [TourID]);

  const getaData = async () => {
    try {
      const response = await axios.get(`${apiDomain}/tours`);
      setTours(response.data.tours);
    } catch (error) {
      console.log('Error fetching tours:', error);
    }
  };

  const fetchTourDetails = async () => {
    try {
      const response = await axios.get(`${apiDomain}/tour/${TourID}`);
      const tour = response.data.tour;
      setTourData({
        title: tour.title,
        description: tour.description,
        duration: tour.duration,
        price: tour.price
      });
    } catch (error) {
      console.log('Error fetching tour details:', error);
      setTourData({
        title: '',
        description: '',
        duration: '',
        price: ''
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTourData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let response;

      if (TourID) {
        // Update an existing tour
        console.log(tourData);
        response = await axios.put(`${apiDomain}/tour/+TourID`, tourData);
      } else {
        response = await axios.post(`${apiDomain}/tours`, tourData);
        // Create a new tour
      }

      if (response.status === 201 || response.status === 200) {
        // Tour successfully created or updated in the database
        console.log('Tour saved:', response.data);
        // Redirect to view tours page or perform any other action
        navigate('/admin/viewtours');
      } else {
        // Error creating or updating the tour
        console.log('Error saving tour:', response.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="ap">
      <div className="create-tours">
        <h2 className="create-tours__heading">{TourID ? 'Update Tour' : 'Create Tour'}</h2>
        <form className="create-tours__form" onSubmit={handleSubmit}>
          <div className="create-tours__form-group">
            <label className="create-tours__label">Title:</label>
            <input
              type="text"
              name="title"
              defaultValue={!TourID ? '' : tour?.title}
              onChange={handleChange}
              className="create-tours__input"
              placeholder={!TourID ? '' : tour?.title}
            />
          </div>
          <div className="create-tours__form-group">
            <label className="create-tours__label">Description:</label>
            <textarea
              name="description"
              defaultValue={!TourID ? '' : tour?.description}
              onChange={handleChange}
              className="create-tours__textarea"
              placeholder={!TourID ? '' : tour?.description}
            ></textarea>
          </div>
          <div className="create-tours__form-group">
            <label className="create-tours__label">Duration:</label>
            <input
              type="text"
              name="duration"
              defaultValue={!TourID ? '' : tour?.duration}
              onChange={handleChange}
              className="create-tours__input"
              placeholder={!TourID ? '' : tour?.duration}
            />
          </div>
          <div className="create-tours__form-group">
            <label className="create-tours__label">Price:</label>
            <input
              type="text"
              name="price"
              defaultValue={!TourID ? '' : tour?.price}
              onChange={handleChange}
              placeholder={!TourID ? '' : tour?.price}
              className="create-tours__input"
            />
          </div>
          <button type="submit" className="create-tours__button">
            {TourID ? 'Update Tour' : 'Create Tour'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateTours;
