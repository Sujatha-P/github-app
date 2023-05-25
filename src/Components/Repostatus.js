import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const RepoStats = () => {
  const { owner, repoName } = useParams();
  const [repoData, setRepoData] = useState(null);

  useEffect(() => {
    const fetchRepoData = async () => {
      try {
        const response = await axios.get(`https://api.github.com/repos/${owner}/${repoName}`);
        setRepoData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRepoData();
  }, [owner, repoName]);

  if (!repoData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Repository Stats: {repoData.full_name}</h2>
      <p>Commits: {repoData.commits}</p>
      <p>Forks: {repoData.forks}</p>
      <p>Issues: {repoData.open_issues}</p>
      {/* Display other stats as needed */}
    </div>
  );
};

export default RepoStats;
