import { useQueries } from "@tanstack/react-query";
import { useState } from "react";

const fetchTodos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

const FetchFromMultipleEndpoints = () => {
  const [currentTodoId, setCurrentTodoId] = useState(1);
  const [currentPostId, setCurrentPostId] = useState(1);

  // Using useQueries to fetch from multiple endpoints
  const results = useQueries({
    queries: [
      { queryKey: ["todos"], queryFn: fetchTodos },
      { queryKey: ["posts"], queryFn: fetchPosts },
    ],
  });

  const [todoQuery, postsQuery] = results;

  if (todoQuery.isLoading || postsQuery.isLoading) return <div>Loading...</div>;

  if (todoQuery.error || postsQuery.error)
    return (
      <div>
        An error occurred:{" "}
        {todoQuery.error?.message || postsQuery.error?.message}
      </div>
    );

  const todosData = todoQuery.data;
  const postsData = todoQuery.data;

  // Handle button clicks to fetch specific todos and posts
  const handleNextTodoClick = () => {
    setCurrentTodoId((prevId) => Math.min(prevId + 1, todosData.length));
  };

  const handleNextPostClick = () => {
    setCurrentPostId((prevId) => Math.min(prevId + 1, postsData.length));
  };

  return (
    <div>
      <h1>Todos</h1>
      <pre>
        {JSON.stringify(
          todosData.find((todo: any) => todo.id === currentTodoId),
          null,
          2,
        )}
      </pre>
      <button className="bg-teal-700 p-2 rounded text-white" onClick={handleNextTodoClick}>Next Todo</button>

      <h1>Posts</h1>
      <pre>
        {JSON.stringify(
          postsData.find((post: any) => post.id === currentPostId),
          null,
          2
        )}
      </pre>
      <button className="bg-teal-700 p-2 rounded text-white" onClick={handleNextPostClick}>Next Post</button>
    </div>
  );
};

export default FetchFromMultipleEndpoints;
