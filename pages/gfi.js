import { useState, useEffect } from 'react';
import axios from 'axios';

const GoodFirstIssues = () => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const fetchIssues = async () => {
      const response = await axios.get(
        'https://api.github.com/search/issues?q=is:open+is:issue+label:"good+first+issue"'
      );
      setIssues(response.data.items);
    };
    fetchIssues();
  }, []);

  return (
    <div>
      <h1>Good First Issues</h1>
      <ul>
        {issues.map((issue) => (
          <li key={issue.id}>
            <a href={issue.html_url} target="_blank" rel="noopener noreferrer">
              {issue.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GoodFirstIssues;
