import React, { useState } from "react";
import useForm from "./hooks/useForm";
import useDebounce from "./hooks/useDebounce";
import usePrevious from "./hooks/usePrev";
import useLocalStorage from "./hooks/useLocalStorage";
import useFetch from "./hooks/useFetch";

const App = () => {
  const { values, handleChange, handleSubmit } = useForm({
    username: "",
    email: "",
  });

  const {data,loading,error}=useFetch<any>("https://jsonplaceholder.typicode.com/posts")

  const [inputValue, setInputValue] = useState("");
  const debouncedInput = useDebounce(inputValue, 500);
  const previousValue = usePrevious(inputValue);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const [storedValue,setStoredValue]=useLocalStorage("username","")
  return (
    <div className="p-4">
      <h1>Custom Hooks In Action</h1>
      <div className="mb-4">
        <h2 className="text-xl">Form Handling Example</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="border p-2 mb-2"
            name="username"
            value={values.username}
            onChange={handleChange}
            placeholder="UserName"
          />
          <input
            type="text"
            className="border p-2 mb-2"
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <button
            type="submit"
            className="bg-black p-2 ml-2 text-white rounded border"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="mb-4">
        <h2 className="text-xl">Debounced Input Example</h2>
        <input
          type="text"
          className="border p-2"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type to debounce"
        />
        <p>Debounced Value: {debouncedInput}</p>
        <p>Previous Value: {previousValue}</p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl">Local Storage Example</h2>
        <input type="text" className="border p-2" value={storedValue} onChange={(e)=>setStoredValue(e.target.value)} placeholder="Set Local Storage" />
      </div>
      
      <div className="mb-4">
        <h2 className="text-xl">Fetch Data Example</h2>
        {loading && <p>Loading...</p>}
        {error && <p>Error:{error}</p>}
        {data && <pre>{JSON.stringify(data,null,2)}</pre>}
      </div>
    </div>
  );
};

export default App;
