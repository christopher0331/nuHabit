import React from 'react';

const Selector = (props) => (
    <div>
        <select value={props.currentView} onChange={props.updateData}>
            <option value='diet'>Diet</option>
            <option value='exercise'>Exercise</option>
            <option value='meditation'>Meditation</option>
            <option value='reading'>Reading</option>
            <option value='reflection'>Reflection</option>
            <option value='sleep'>Sleep</option>
            <option value='all'>All</option>
        </select>   
    </div>
)

export default Selector;