import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [tasks, setTasks] = useState(TASKS)
  const [category, setCategory] = useState("All")

  const handleDelete = text => {
    const newTasks = tasks.filter(task => task.text !== text)
    setTasks(newTasks)
  }

  const handleSubmit = (event,newTask) => {
    event.preventDefault()
    setTasks([...tasks, newTask])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} setCategory={setCategory}/>
      <NewTaskForm categories={CATEGORIES} handleSubmit={handleSubmit}/>
      <TaskList tasks={tasks} category={category} onDelete={handleDelete}/>
    </div>
  );
}

export default App;
