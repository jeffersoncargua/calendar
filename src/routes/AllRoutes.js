import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Task } from "../pages";

export const AllRoutes = ({monthList,calendario, tasks , setTasks, mes, setMes, setDia, id, setId}) => {

  const [title, setTitle] = useState('');

  return (
    <Routes>
        <Route path="/" element={<Home monthList={monthList} calendario={calendario} tasks={tasks} mes={mes} setMes={setMes} setDia={setDia} id={id} setId={setId} title={title} setTitle={setTitle} />}/>
        <Route path="task/:dia/:mes" element={<Task tasks={tasks} setTasks={setTasks} monthList={monthList} />} />
    </Routes>
  )
}

