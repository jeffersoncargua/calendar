import { useEffect,useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {calendarFill} from '../functions/calendarFill';
import { TaskCard } from '../components/';

import Calendar from '../assets/calendar.gif';
import './styles/Home.css';

export const Home = ({monthList, calendario,tasks, mes,setMes, setDia, id, setId, title, setTitle}) => {

  const mesRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    /*Esta funcion permite rellenar el calendario en una array que luego lo pasa al array calendario */     
    const arrayCalendar= calendarFill(id); 
    setMes({id:Number(id),dias:arrayCalendar});
  },[id,setMes])

  
  const handleMes = () => {
    setId(Number(mesRef.current.value));
    const month = monthList.find( month => month.id === Number(mesRef.current.value)); /*permite obtener el mes del array monthlist */
    const isInCalendar = calendario.find( mesItem => mesItem.id === Number(mesRef.current.value) );
    if(month){
      if(isInCalendar){
        setMes(isInCalendar);
        setTitle(month.mes);
      }else{
        setTitle(month.mes);
        let valor = Number(mesRef.current.value)-1;
        setDia(new Date(2025,valor)); /*Permite obtener la fecha del primero de cada mes */
      }
    }else{
      setTitle('');
      setMes({});
    }
  } 

  return (
    <main>
        <section className='heading'>
          <h1>{title || 'Mes'}</h1>
          <img src={Calendar} alt="calendario" />
          <select onChange={() => handleMes()} name="month" id="month" ref={mesRef} defaultValue={id || 'null'} >
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
            {mes.dias && mes.dias.map((dia,index)=>(
                <TaskCard key={index}>
                  <span onClick={() => navigate(`task/${dia}/${mesRef.current.value}`)} title='Agregar tareas'>
                    <h1>{dia}</h1> 
                  </span>
                  {dia!==null && tasks.find( task => Number(task.mes) === mes.id && Number(task.dia) === dia) ? 
                    (
                      <span title='Tienes tareas pendientes'><i className="bi bi-star-fill pending"></i></span>
                    )
                    :
                    (
                      dia!==null && <span title='No tienes tareas pendientes'><i className="bi bi-star-fill assigmentTask"></i></span>
                    )
                  }
                </TaskCard>                
            ))}
          </div>
        </section>        
    </main>
  )
}
