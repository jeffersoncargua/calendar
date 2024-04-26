import { useState } from "react";
import { TaskItem,TaskForm } from "../components";

export const Task = ({tasks,setTasks,monthList}) => {
  const [task, setTask] = useState({});
  const [showForm,setShowForm] = useState(false); 

  return (
    <main className="">
        {showForm && <TaskForm showForm={showForm} setShowForm={setShowForm} task={task} setTask={setTask} tasks={tasks} setTasks={setTasks} />}
        <TaskItem showForm={showForm} setShowForm={setShowForm} tasks={tasks} setTasks={setTasks} monthList={monthList} task={task} setTask={setTask} />
    </main>
  )
}
