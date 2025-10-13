interface Todo{
    id:number
    title:string
    completed:boolean
}
interface TodoListProps{
    todos:Todo[] | null
}

const TodoList = ({ todos }: TodoListProps) => {
    // const {id,title,completed} = todos || {}
  return todos?.map(({id,title,completed}:Todo) => (
    <div key={id}>
        <p>
            <strong>Todo Id:</strong>{id}
        </p>
        <p>
            <strong>Todo Title:</strong>{title}
        </p>
        <p>
            <strong>Todo Completed:</strong>{completed ? "Yes":"No"}
        </p>
        <br />
        <hr />
    </div>
  ));
}

export default TodoList