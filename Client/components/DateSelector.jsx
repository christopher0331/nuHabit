import React from 'react';

const DateSelector = (props) => (
    <div className='dateSelector'>
        <select value={props.currentDates} onChange={props.updateDates}>
            <option value='Last 7 Days'>Last 7 Days</option>
            <option value='Last 30 Days'>Last 30 Days</option>
            <option value='Last Quarter'>Last Quarter</option>
        </select>   
    </div>
)

export default DateSelector;