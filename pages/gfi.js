import { useState, useEffect } from 'react';
import axios from 'axios';
import IssueCard from '../components/card';

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
      {issues.map((issue) => (
        <IssueCard key={issue.id} issue={issue} />
      ))}
    </div>
  );
};

export default GoodFirstIssues;
