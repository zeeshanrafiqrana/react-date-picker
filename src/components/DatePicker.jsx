// ~src/components/mydatepicker.component.js
import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays, subDays } from 'date-fns';
import "./styles.css";
// class MyDatepickerComponent extends Component {

//     state = {
//         startDate: new Date()
//     };

//     handleChange = date => {
//         this.setState({
//             startDate: date
//         });
//     };

//     render() {

//         return (
//             <div>
//                 <DatePicker
//                     selected={this.state.startDate}
//                     onChange={this.handleChange}
//                 />
//             </div>
//         )
//     };
// }

function MyDatepickerComponent() {
    const [startDate, setStartDate] = useState(new Date());
    const [selectDate, setSelectDate] = useState(null);
    const isWeekday = (date) => {
        const day = date.getDay(date);
        // console.log("day",day)
        return day !== 0;
    };
    const highlightWithRanges = [
        {
            "react-datepicker__day--highlighted-custom-1": [
                subDays(new Date(), 4),
                subDays(new Date(), 3),
                subDays(new Date(), 2),
                subDays(new Date(), 1),
            ],
        },
        {
            "react-datepicker__day--highlighted-custom-2": [
                addDays(new Date(), 1),
                addDays(new Date(), 2),
                addDays(new Date(), 3),
                addDays(new Date(), 4),
            ],
        },
    ];
    return (
        <><div className="badge bg-success">Here is Badge</div>
            <DatePicker
                placeholderText="MM / DD / YYYY"
                // className="w-full text-base-i ml-3 outline-none bg-transparent"
                // onChange={e => { setSelectDate(e); onSelect(e) }}
                // minDate={new Date()}
                // selected={selectDate}
                // render={icon}
                // calendarStartDay={0}
                onChange={(date) => setStartDate(date)}
                dayClassName={(date) =>
                    (date.getDay() === 0) ? "bg-dark text-white" : " "
                }
                onChangeRaw={(e) => { e.preventDefault() }}
                filterDate={isWeekday}
                // highlightDates={highlightWithRanges}
                highlightDates={[addDays(new Date(), 7), addDays(new Date(), 14), addDays(new Date(), 21), addDays(new Date(), 28)]}
            />
        </>
    );
};

export default MyDatepickerComponent;