
/*Esta funcion permite rellenar el calendario en una array que luego lo pasa al array calendario */
export function calendarFill(dia,mesRef) {
  
        let arrayCalendar = []; 
        for (let i = 0; i < getDay(dia); i++) {      
          arrayCalendar.push(null);
        }
        while(dia.getMonth() === Number(mesRef)-1){ 
          arrayCalendar.push(dia.getDate());
          dia.setDate(dia.getDate()+1);
        }
        return arrayCalendar;

/*Esta funcion permite obtener los espacios en blanco del calendario cuando el dia uno empieza 
  entre semana */
  function getDay(date){
    let day = date.getDay();
    if(day === 0){
      day = 7;
    }
    return day - 1;
  }
}

