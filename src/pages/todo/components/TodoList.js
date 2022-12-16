import { useSelector } from "react-redux";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
  const data = useSelector((state) => state.todos.data);

  return (
    <div>
      {data.map((item) => (
        <TodoListItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default TodoList;
