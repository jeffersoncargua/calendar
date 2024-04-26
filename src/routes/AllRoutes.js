import { Routes, Route } from "react-router-dom";
import { Home, Task } from "../pages";

export const AllRoutes = ({monthList,calendario, setCalendario, tasks , setTasks}) => {

  return (
    <Routes>
        <Route path="/" element={<Home monthList={monthList} calendario={calendario} setCalendario={setCalendario} tasks={tasks} setTasks={setTasks}/>}/>
        <Route path="task/:dia/:mes" element={<Task tasks={tasks} setTasks={setTasks} monthList={monthList} />} />
    </Routes>
  )
}