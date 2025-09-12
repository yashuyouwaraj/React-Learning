import React, { useEffect, useState } from "react";

const FetchDataEffect = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData =async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setData(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>FetchDataEffect</h2>
      {data.length > 0 ? <h2>{data[0].title}</h2> : <p>Loading...</p>}
    </div>
  );
};

export default FetchDataEffect;
