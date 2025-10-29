import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const fetchTodos = async (page = 1, limit = 10) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${limit}`
  );
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const { data, error, isLoading } = useQuery({
    queryKey: ["todos", currentPage],
    queryFn: () => fetchTodos(currentPage, pageSize),
  });

  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-screen bg-linear-to-br from-indigo-100 to-purple-100">
        <div className="text-indigo-700 font-semibold text-lg animate-pulse">
          Loading Todos...
        </div>
      </div>
    );

  if (error instanceof Error)
    return (
      <div className="flex justify-center items-center min-h-screen bg-red-50 text-red-700 font-semibold">
        ⚠️ An error occurred: {error.message}
      </div>
    );

  const handleNextPage = () => setCurrentPage((prevPage) => prevPage + 1);
  const handlePreviousPage = () =>
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-100 via-white to-purple-100 p-6 flex flex-col items-center">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 w-full max-w-2xl p-6">
        <h1 className="text-2xl font-bold text-indigo-700 mb-6 text-center">
          ✅ Todos — Page {currentPage}
        </h1>

        <ul className="space-y-3 mb-6">
          {data?.map((todo: any) => (
            <li
              key={todo.id}
              className={`p-4 rounded-xl border flex justify-between items-center transition-all ${
                todo.completed
                  ? "bg-green-50 border-green-200 text-green-700"
                  : "bg-gray-50 border-gray-200 text-gray-700"
              } hover:shadow-md`}
            >
              <span className="truncate max-w-[80%]">{todo.title}</span>
              <span
                className={`text-sm font-medium ${
                  todo.completed ? "text-green-600" : "text-yellow-600"
                }`}
              >
                {todo.completed ? "Done" : "Pending"}
              </span>
            </li>
          ))}
        </ul>

        <div className="flex justify-between items-center">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
              currentPage === 1
                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                : "bg-indigo-600 text-white hover:bg-indigo-700 active:scale-95"
            }`}
          >
            ← Previous
          </button>

          <button
            onClick={handleNextPage}
            className="px-4 py-2 rounded-lg font-medium bg-indigo-600 text-white hover:bg-indigo-700 active:scale-95 transition-all duration-200"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
