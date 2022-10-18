import React,{useState} from "react"

function NewTaskForm({categories, handleSubmit}) {
  //making a controlled form
  const [newTask, setNewTask] = useState({text:"", category:"Code"})

  const handleChange = (event) => {
    setNewTask({...newTask, [event.target.name]:(event.target.value)})
  }

  return (
    <form className="new-task-form" onSubmit={event => handleSubmit(event, newTask)}>
      <label>
        Details
        <input type="text" name="text" onChange={handleChange}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleChange}>
          {categories.slice(1).map(category => 
            <option key={category}>{category}</option>
          )}
        </select>
      </label>
      <input type="submit" name="text" value="Add task"/>
    </form>
  );
}

export default NewTaskForm;
