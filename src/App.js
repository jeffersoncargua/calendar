import { useEffect,useState } from 'react';
import { Header, Footer} from './components';
import { AllRoutes } from './routes/AllRoutes';

import './App.css';

function App() {

  const [calendario, setCalendario] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [mes, setMes] = useState({});
  const [dia, setDia] = useState(new Date(2024,0));
  const [id, setId] = useState();

  useEffect(() => {
    setCalendario([...calendario, mes]);
  },[mes, calendario])

  const monthList = [
    {id:1 , mes:'Enero'},
    {id:2 , mes:'Febrero'},
    {id:3 , mes:'Marzo'},
    {id:4 , mes:'Abril'},
    {id:5 , mes:'Mayo'},
    {id:6 , mes:'Junio'},
    {id:7 , mes:'Julio'},
    {id:8 , mes:'Agosto'},
    {id:9 , mes:'Septiembre'},
    {id:10 , mes:'Octubre'},
    {id:11 , mes:'Noviembre'},
    {id:12 , mes:'Diciembre'},
  ];

  return (
    <div className='App'>
      <Header />
      <AllRoutes monthList={monthList} calendario={calendario} setCalendario={setCalendario} tasks={tasks} setTasks={setTasks} mes={mes} setMes={setMes} dia={dia} setDia={setDia} id={id} setId={setId} />
      <Footer />
    </div>    
  );
}

export default App;
