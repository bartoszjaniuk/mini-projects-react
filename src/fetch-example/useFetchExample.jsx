import { useState, useEffect } from "react";

const useFetchExample = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { loading, data };
};

export default useFetchExample;
