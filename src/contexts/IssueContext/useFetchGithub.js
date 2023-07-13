import { useContext, useState } from 'react';
import { IssueContext } from './IssueContext';

export const useFetchGithub = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { issueList, fetchIssueList } = useContext(IssueContext);

  const fetchIssueListGithub = async () => {
    setIsLoading(true);
    try {
      const response = await fetchIssueList();
      return response;
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { issueList, fetchIssueListGithub, isLoading, error };
};