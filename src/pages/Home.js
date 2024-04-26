import { useEffect,useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {calendarFill} from '../functions/calendarFill';
import { TaskCard } from '../components/';

import Calendar from '../assets/Calendario-10.gif';
import './styles/Home.css';

export const Home = ({monthList, calendario, setCalendario,tasks, setTasks}) => {

  const [title, setTitle] = useState('');
  const [dia, setDia] = useState(new Date(2024,0));
  const mesRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    /*Esta funcion permite rellenar el calendario en una array que luego lo pasa al array calendario */
    setCalendario(calendarFill(dia,mesRef.current.value));
  },[dia,mesRef,setCalendario])
  
  const handleMes = () => {
    const id = mesRef.current.value;
    const month = monthList.find( month => month.id === Number(id)); /*permite obtener el mes del array monthlist */
    if (month) {
      setTitle(month.mes);   
      setDia(new Date(2024,Number(mesRef.current.value)-1)); /*Permite obtener la fecha del primero de cada mes */
    }else{
      setTitle('');
      setCalendario([]);
    }    
  } 

  //console.log(calendario);

  return (
    <main>
        <section className='heading'>
          <h1>{title || 'Mes'}</h1>
          <img src={Calendar} alt="calendario" />
          <select onChange={() => handleMes()} name="month" id="month" ref={mesRef} >
            <option value="null"> ---Seleccione Mes---</option>
            { monthList && monthList.map((month,index)=>(
              <option key={index} value={month.id}>{month.mes}</option>
            ))              
            }            
          </select>
        </section>
        <section className='containerTasks'>
          <table className='calendarDay'>
            <thead>
              <tr>
                <th>Lunes</th>
                <th>Martes</th>
                <th>Miercoles</th>
                <th>Jueves</th>
                <th>Viernes</th>
                <th>Sabado</th>
                <th>Domingo</th>
              </tr>
            </thead>            
          </table>
          <div className="tasks">
            {calendario && calendario.map((dia,index)=>(
                <TaskCard key={index} dia={dia}>
                  <span onClick={() => navigate(`task/${dia}/${mesRef.current.value}`)} title='Agregar tarea?'>
                  <h1>{dia}</h1> 
                  </span> 
                </TaskCard>                
            ))}
          </div>
        </section>        
    </main>
  )
}
