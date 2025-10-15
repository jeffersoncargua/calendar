
/*Esta funcion permite rellenar el calendario en una array que luego lo pasa al array calendario */
export function calendarFill(mesRef) {
  
        let arrayCalendar = []; 
        const diaActual = new Date(2025,Number(mesRef)-1);
        for (let i = 0; i < getDay(diaActual); i++) {      
          arrayCalendar.push(null);
        }
        while(diaActual.getMonth() === Number(mesRef)-1){ 
          arrayCalendar.push(diaActual.getDate());
          diaActual.setDate(diaActual.getDate()+1); 
        }
        return arrayCalendar;
}

/*Esta funcion permite obtener los espacios en blanco del calendario cuando el dia uno empieza 
  entre semana */
function getDay(date){
  let day = date.getDay();
  if(day === 0){
    day = 7;
  }
  return day - 1;
}

