import { Calendar } from '@mantine/dates';
import { useMantineTheme } from '@mantine/core';

const MonthCalander = () => {
  const theme = useMantineTheme();

  return (
    <div className="MonthCalander">
         <h1>1:07 AM</h1>
     <Calendar
           initialMonth={new Date(2022, 4)}
           dayStyle={(date) =>
             date.getDay() === 5 && date.getDate() === 13
               ? { backgroundColor: theme.colors.teal[4], color: theme.white }
               : null
           }
      /> 
     </div>
      )
      
}

export default MonthCalander