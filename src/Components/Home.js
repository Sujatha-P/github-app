import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [search, setSearch] = useState('');
  const [users, setUsers] = useState([]);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://api.github.com/search/users?q=${search}`);
      setUsers(response.data.items);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='m-auto'>
      <h2 className='text-primary'>Github User Search</h2>
      <div className='d-flex'>
      <input type="text" placeholder="Search Users" className='form-control w-50' value={search} onChange={handleChange} />
      <button onClick={handleSearch}>Search</button>
      </div>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/user/${user.login}`}>{user.login}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
