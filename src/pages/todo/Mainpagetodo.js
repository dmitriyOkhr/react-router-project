import Header from "./components/Header";
import MainForm from "./components/MainForm";
import TodoList from "./components/TodoList";

const Mainpagetodo = () => {
  return (
    <div className="todo">
      <Header />
      <MainForm />
      <TodoList />
    </div>
  );
};

export default Mainpagetodo;
