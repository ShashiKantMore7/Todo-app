import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import CreateNew from "./components/CreateNew";
import ItemList from "./components/ItemList";

// console.log("i love");
function App() {
  const [tasks, setTask] = useState([
    {
      id: 1,
      taskName: "go to supermarket",
      complete: false,
    },
    {
      id: 2,
      taskName: "complete react assignments",
      complete: false,
    },
  ]);
  const [taskInp, setTaskInp] = useState("");
  function handleChange(e) {
    setTaskInp(e.target.value);
  }
  const createNewTask = (e) => {
    e.preventDefault();
    console.log(taskInp);
    if (!taskInp) return;
    addTask(taskInp);
  };
  const addTask = (taskName) => {
    //if empty 1 or add with length
    const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
    const newTaskItem = {
      id,
      complete: false,
      taskName,
    };
    const newTaskList = [...tasks, newTaskItem];
    setTask(newTaskList);
    setTaskInp("");
  };
  const handleDelete = (id) => {
    const newTaskList = tasks.filter((task) => {
      return task.id !== id;
    });
    setTask(newTaskList);
  };
  const handleDoubleClick = (id) => {
    const newTaskList = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, complete: !task.complete };
      } else {
        return task;
      }
    });
    setTask(newTaskList);
  };
  const [editableId, setEditableId] = useState("");
  const handleEditing = (id) => {
    console.log(id);
    document.getElementById(id).focus();
    setEditableId(id);

  };
  // console.log(editableId)
  return (
    <div className="to-do-app">
      <Header />
      <CreateNew
        createNewTask={createNewTask}
        handleChange={handleChange}
        taskInp={taskInp}
      />
      <ItemList
        tasks={tasks}
        handleDoubleClick={handleDoubleClick}
        handleEditing={handleEditing}
        setEditableId={setEditableId}
        editableId={editableId}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
