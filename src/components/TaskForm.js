import { useRef } from "react";
import { useParams } from "react-router-dom";

import '../components/styles/TaskForm.css';

export const TaskForm = ({showForm, setShowForm,task, setTask, tasks , setTasks}) => {

    const params = useParams();
    const taskRef = useRef('');

    console.log(task);

    const handleAdd = (e) => {   
        console.log(taskRef.current.value);
        e.preventDefault(); 
        if(task.id){
            let updatedTasks = tasks.map((taskItem) => taskItem.id === task.id ? {...taskItem ,taskName: taskRef.current.value}:taskItem);
            setTasks(updatedTasks);
        }else{
            setTasks([...tasks,{
                dia: params.dia,
                mes: params.mes,
                id: Math.round((Math.random()+1)*1000),
                taskName: taskRef.current.value,
                statusTask: false,
            }]);
        }
        setTask({});
        setShowForm(!showForm);
     
    }

    const handleChange= (e) => {
        document.getElementById('taskName').value = e.target.value;
    }

  return (
    <div className="taskform">
        <form onSubmit={(e) => handleAdd(e)} >
        <input type="text" value={task? task.id : ''} hidden/>
        <input type="text" placeholder="New Task" ref={taskRef} id='taskName' onChange={(e) => handleChange(e)} defaultValue={task.id ? task.taskName: ''}/>
        <button type='submit'>{task.id ? 'Edit' : 'Add'}</button>
        </form>
    </div>
  )
}
