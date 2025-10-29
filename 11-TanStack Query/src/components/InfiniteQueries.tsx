import { useEffect, useRef } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const fetchTodos = async ({ pageParam = 1 }: { pageParam?: number }): Promise<Todo[]> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos?_page=${pageParam}&_limit=10`
  );
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

const InfiniteQueries = () => {
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) =>
      lastPage.length === 10 ? pages.length + 1 : undefined,
  });

  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  // Intersection Observer for Infinite Scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { root: null, rootMargin: "100px", threshold: 0.5 }
    );

    const currentRef = loadMoreRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  // Loading and Error States
  if (isLoading)
    return (
      <div className="flex items-center justify-center min-h-screen bg-linear-to-br from-indigo-100 to-purple-100">
        <div className="text-indigo-700 font-semibold text-lg animate-pulse">
          Loading Todos...
        </div>
      </div>
    );

  if (error instanceof Error)
    return (
      <div className="flex items-center justify-center min-h-screen bg-red-50 text-red-700 font-semibold">
        ⚠️ An error occurred: {error.message}
      </div>
    );

  // Main UI
  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-100 via-white to-purple-100 py-10 px-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-indigo-700 mb-8">📜 Infinite Todos</h1>

      <div className="w-full max-w-2xl space-y-4">
        {data?.pages.map((page, pageIndex) => (
          <div key={pageIndex} className="space-y-3">
            {page.map((todo) => (
              <div
                key={todo.id}
                className={`flex justify-between items-center p-4 rounded-xl border transition-all duration-200 ${
                  todo.completed
                    ? "bg-green-50 border-green-200 text-green-700"
                    : "bg-gray-50 border-gray-200 text-gray-700"
                } hover:shadow-md hover:-translate-y-0.5`}
              >
                <div className="flex flex-col">
                  <span className="font-medium truncate max-w-[80%]">{todo.title}</span>
                  <span className="text-sm text-gray-500">ID: {todo.id}</span>
                </div>
                <span
                  className={`text-sm font-semibold px-3 py-1 rounded-full ${
                    todo.completed ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {todo.completed ? "Done" : "Pending"}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Infinite Scroll Loader */}
      <div ref={loadMoreRef} className="mt-8 flex justify-center items-center">
        {isFetchingNextPage && (
          <div className="flex items-center space-x-2 text-indigo-600">
            <div className="w-4 h-4 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
            <span>Loading more...</span>
          </div>
        )}
      </div>

      {!hasNextPage && (
        <div className="mt-6 text-gray-600 italic text-sm">🎉 You’ve reached the end!</div>
      )}
    </div>
  );
};

export default InfiniteQueries;
