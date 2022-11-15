import { useState } from 'react';
import './App.css';

import Dates from './Dates';


const DAYS = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];

const MONTHS = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 
                    'September', 'October', 'November', 'December'];

const App = () => {
  return (
    <div className="App">
      <Calendar />
    </div>
  );
};


const Calendar = () => {

  let CURRENT_YEAR = new Date().getFullYear()
  let CURRENT_MONTH = new Date().getMonth()

  const [ selectedYear, setSelectedYear ] = useState(CURRENT_YEAR);
  const [ selectedMonth, setSelectedMonth ] = useState(CURRENT_MONTH);

  // Button click moves the calendar backward by one year
  const handleLeftYearClick = () => {
    let thisyear = selectedYear - 1;
    setSelectedYear(thisyear);
  }

  // Button click moves the calendar forward by one year
  const handleRightYearClick = () => {
    let thisyear = selectedYear + 1;
    setSelectedYear(thisyear);
  }

  // Button click moves the calendar backward by one month
  const handleLeftMonthClick = () => {
    let thismonth = selectedMonth;
    let thisyear = selectedYear;

    if(thismonth == 0) {
      thismonth = 11;
      thisyear -= 1;
      setSelectedMonth(thismonth)
      setSelectedYear(thisyear)
    } else {
      thismonth -= 1;
      setSelectedMonth(thismonth);
    }
  };

  // Button click moves the calendar forward by one month
  const handleRightMonthClick = () => {
    let thismonth = selectedMonth;
    let thisyear = selectedYear;

    if(thismonth == 11) {
      thismonth = 0;
      thisyear += 1;
      setSelectedMonth(thismonth)
      setSelectedYear(thisyear)
    } else {
      thismonth += 1;
      setSelectedMonth(thismonth);
    }
  };

  return (
    <div className="calendar">

      <div className="date-summary">
        {DAYS[new Date().getDay()]} { MONTHS[new Date().getMonth()] } { new Date().getDate()}, { new Date().getFullYear()}
      </div>

      <div className="year-month">
        <div className="month">
          <button onClick={() => handleLeftMonthClick()} className="left-month"> - </button>

          <div className="month-display"> {MONTHS[selectedMonth]} </div>

          <button onClick={() => handleRightMonthClick()} className="left-month"> + </button>
        </div>
        <div className="year">
          <button onClick={() => handleLeftYearClick()} className="left-year"> - </button>
          <div className="year-display"> {selectedYear}</div>
          <button onClick={() => handleRightYearClick()} className="right-year"> + </button>
        </div>
      </div>

      <Dates year={selectedYear} month={selectedMonth} />
    </div>
  );
}

export default App;
