import React from 'react';

const Selector = (props) => (
    <div>

        <select value={props.currentView} onChange={props.updateData}>
            <option value='diet'>diet</option>
            <option value='exercise'>exercise</option>
            <option value='meditation'>meditation</option>
            <option value='reading'>reading</option>
            <option value='reflection'>reflection</option>
            <option value='sleep'>sleep</option>
            <option value='all'>all</option>

        </select>   
    </div>
)

export default Selector;