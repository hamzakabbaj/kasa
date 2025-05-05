import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        setIsLoading(false);
        // save data to local storage
        localStorage.setItem("data", JSON.stringify(data));
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, isLoading, error };
};

const useFetchLogement = (id) => {
  const logements = JSON.parse(localStorage.getItem("data"));
  console.log(logements);
  const logement = logements.find((logement) => logement.id === id);
  return { logement };
};

export default useFetch;
export { useFetchLogement };
