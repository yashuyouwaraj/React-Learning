import TodoList from "./components/Details/TodoList";
import SingleTodoLoader from "./components/shared/SingleTodoLoader";

const App = () => {
  return (
    <div>
      <SingleTodoLoader todoId="1">
        <TodoList todo={null} />
      </SingleTodoLoader>
      <br />

      <SingleTodoLoader todoId="2">
        <TodoList todo={null} />
      </SingleTodoLoader>
      <br />

      <SingleTodoLoader todoId="3">
        <TodoList todo={null} />
      </SingleTodoLoader>
      <br />
    </div>
  );
};

export default App;