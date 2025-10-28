import { useEffect, useState } from "react";

const RaceCondition = () => {
  const [id, setId] = useState(1);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let rc = false;

    const handleFetch = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/todos/${id}`
        );

        if (rc) return;

        if (!res.ok) {
          throw new Error(`Error fetching data: ${res.statusText}`);
        }

        const result = await res.json();
        setData(result);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    };

    handleFetch();

    return () => {
      rc = true;
    };
  }, [id]);

  return (
    <div>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {data && <h1>{JSON.stringify(data)}</h1>}
      <button
        className="p-2 bg-black text-white mt-2 rounded"
        onClick={() => setId((prevId) => prevId + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default RaceCondition;