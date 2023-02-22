import {useCallback, useEffect, useState} from 'react';

import apiClient from './apiClient';

const useGet = <T>(endpoint: string, options: {abort: boolean}) => {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<Error>();
  // const [loading, setLoading] = useState<Boolean>(false);

  const doFetch = useCallback(async () => {
    try {
      // setLoading(true);
      const response = await apiClient(endpoint, {
        method: 'GET',
      });

      if (!response.ok) {
        setError(new Error(await response.text()));
      }

      const newData = await response.json();
      if (newData !== data) {
        setData(newData);
      }
      // setLoading(false);
    } catch (cause) {
      setError(new Error('Could get user profile', {cause}));
    }
  }, [data, endpoint]);

  useEffect(() => {
    if (!options.abort) {
      doFetch();
    }
  }, [doFetch, options.abort]);

  return {error, data};
};

export default useGet;
