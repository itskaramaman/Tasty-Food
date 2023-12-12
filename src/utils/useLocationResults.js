import { useState, useEffect } from "react";
import { LOCATION_SEARCH_URL } from "./constants";

const useLocationResults = (input) => {
  const [results, setResults] = useState([]);

  const fetchLocations = async () => {
    const response = await fetch(LOCATION_SEARCH_URL + input);
    const data = await response.json();
    setResults(data?.data);
  };

  useEffect(() => {
    const timeOut = setTimeout(() => fetchLocations(), 300);
    return () => clearTimeout(timeOut);
  }, [input]);

  return results;
};

export default useLocationResults;
