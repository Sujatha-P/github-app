import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UserStats = () => {
  const { username } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        setUserData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, [username]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>User Stats: {userData.login}</h2>
      <img src={userData.avatar_url} alt={userData.login} />
      <p>Followers: {userData.followers}</p>
      <p>Stars: {userData.public_repos}</p>
      {/* Display other stats as needed */}
    </div>
  );
};

export default UserStats;
