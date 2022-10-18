import React from "react";
import Task from "./Task"

function TaskList({category, tasks, onDelete}) {

  let shownTasks = tasks.filter(task => category === task.category)
  if (category === "All") shownTasks = tasks

  return (
    <div className="tasks">
      {shownTasks.map(task => {
        return(
          <Task
            key={task.text}
            category={task.category}
            text={task.text}
            onDelete={onDelete}
          />
        )
      })}
    </div>
  );
}

export default TaskList;
