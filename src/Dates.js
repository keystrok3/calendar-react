
import { useState } from 'react';
import './Dates.css'

/**
 * Generates a 2D array of dates of a given month and year such that:
 * every date goes into an array index that concedes with the JavaScript
 * 0-indexed numerical day of the week.
 * e.g., Sunday is 0, Monday is 1 and therefore both days will go to 
 * array[['', '', 1, 2, ...], ...]
*/
const generate_dates = (year, month) => {
    const lastday = new Date(year, month + 1, 0).getDate();
    let date = 1;
    const calendarArray = [];

    for(let i = 0; i < 6; i++) {
        let week = [];
        for(let j = 0; j < 7; j++) {

            if(new Date(year, month, date).getDay() !== j || date > lastday) {
                week.push("");
                continue;
            }

            week.push(date);
            date += 1;
        }
        calendarArray.push(week);
        week = [];
    }

    return calendarArray;
}

/**
 * Current selected year and month passed down as props.
 * They are selected by buttons on the parent component
 * */ 
const Dates = ({ year, month }) => {

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <td>SUN</td>
                        <td>MON</td>
                        <td>TUE</td>
                        <td>WED</td>
                        <td>THU</td>
                        <td>FRI</td>
                        <td>SAT</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        generate_dates(year, month).map((row, i) => {
                            return (
                                <tr key={i}>
                                    { 
                                        row.map((date, j) => {
                                            return <td key={j}>{date}</td>
                                        })
                                    }  
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    );
};



export default Dates;