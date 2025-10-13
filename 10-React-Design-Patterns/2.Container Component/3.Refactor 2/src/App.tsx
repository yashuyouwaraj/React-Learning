import CommentsList from "./components/Details/CommentsList";
import TodoList from "./components/Details/TodoList";
import ResourceLoader from "./components/shared/ResourceLoader";

const App = () => {
  return (
    <div>
      <ResourceLoader resourceUrl="/todos/1" resourceName="todo">
        <TodoList todo={null} />
      </ResourceLoader>

      <hr />
      <br />

      <ResourceLoader resourceUrl="/comments/1" resourceName="comments">
        <CommentsList comments={null} />
      </ResourceLoader>
    </div>
  );
};

export default App;