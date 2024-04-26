
import {  useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../components/styles/TaskItem.css';

export const TaskItem = ({showForm, setShowForm,tasks,setTasks,monthList, task , setTask}) => {

  const [taskDate, setTaskDate] = useState([]);
  const [mes,setMes] = useState();
  const params = useParams();


  useEffect(() => {
    const month = monthList.find((month) => month.id === Number(params.mes));
    setMes(month.mes);
    const updatedTask = tasks.filter(taskItem => taskItem.dia === params.dia && taskItem.mes === params.mes);
    setTaskDate(updatedTask);    
  },[tasks,params,monthList])


  const handleStatus = (id) =>  {
    const updateList= tasks.map((taskItem) => taskItem.id === id ? {...taskItem, statusTask : !Boolean(taskItem.statusTask)}:taskItem);
    setTasks(updateList);
  }

  const handleAdd = () => {
    setShowForm(!showForm);
    setTask({});
  }

  const handleEdit = (taskItem) => {
    console.log(taskItem);
    setTask(taskItem);   
    setShowForm(true);
  }

  const handleDelete = (id) => {
      const updateTasks = tasks.filter(taskItem => taskItem.id !== id);
      setTasks(updateTasks);
  }
  console.log(tasks);

  return (
    <div className="taskItem">
      <h1>Task for this {mes}`s {params.dia}</h1>
      <div className='task'>
        <p>Tasks</p>
        <p>State</p>
        <p>Edit/Delete</p>
        <p><span onClick={() => handleAdd()}><i className="bi bi-file-earmark-plus-fill btnAdd"></i></span></p>        
      </div>
      <div className='infoTasks'>
        {taskDate && taskDate.map((taskItem) => (
          <div className='taskcard' key={taskItem.id}>
            <span>{taskItem.taskName}</span>
            <span><input type="checkbox" onChange={() => handleStatus(taskItem.id)} /></span>
            <div className='btnGroup'>
              <span onClick={() => handleEdit(taskItem)}><i className="bi bi-pencil-square btnEdit"></i></span>
              <span onClick={() => handleDelete(taskItem.id)} ><i className="bi bi-trash btnDelete"></i></span>
            </div>
            <p></p>
            <p></p>
          </div>          
        ))
        }
      </div>  
    </div>
  )
}
