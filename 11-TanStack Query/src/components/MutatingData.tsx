import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

interface Todo {
  id?: number;
  title: string;
  completed: boolean;
}

const postTodo = async (newTodo: Todo): Promise<Todo> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newTodo),
  });

  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

const MutatingData = () => {
  const queryClient = useQueryClient();
  const [title, setTitle] = useState("");

  const { mutate, error, status } = useMutation({
    mutationFn: postTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: (error: Error) => {
      console.error("Error posting todo:", error);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title.trim() === "") return;
    mutate({ title, completed: false });
    setTitle("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-100 via-white to-purple-100 p-4">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-md p-6 border border-gray-100">
        <h1 className="text-2xl font-semibold text-center text-indigo-700 mb-6">
          📝 Create New Todo
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter todo title..."
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
          />

          <button
            type="submit"
            disabled={status === "pending"}
            className={`px-4 py-2 rounded-lg font-medium text-white transition-all duration-200 ${
              status === "pending"
                ? "bg-indigo-300 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700 active:scale-95"
            }`}
          >
            {status === "pending" ? "Adding..." : "Add Todo"}
          </button>
        </form>

        {/* Feedback Section */}
        <div className="mt-6 text-center">
          {error && (
            <div className="text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
              ⚠️ {(error as Error).message}
            </div>
          )}
          {status === "success" && (
            <div className="text-green-700 bg-green-50 border border-green-200 rounded-lg px-3 py-2">
              ✅ Todo added successfully!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MutatingData;
