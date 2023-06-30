import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AdminProfile.css';

function AdminProfile() {
  const [adminInfo, setAdminInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch admin profile data from the database
    fetchAdminProfile();
  }, []);

  const fetchAdminProfile = async () => {
    try {
      const response = await axios.get('/api/admin/profile');
      setAdminInfo(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching admin profile:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='ap'>
         <div className="admin-profile2">
      {adminInfo ? (
        <>
          <h2>Admin Profile</h2>
          <div className="admin-profile__info">
            <div>
              <strong>Admin ID:</strong> {adminInfo.adminId}
            </div>
            <div>
              <strong>Name:</strong> {adminInfo.name}
            </div>
            <div>
              <strong>Email:</strong> {adminInfo.email}
            </div>
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
    </div>
   
  );
}

export default AdminProfile;
