import React from 'react';
import './Form.css';
import PropTypes from 'prop-types';

function Form({value, onCreate, onKeyPress, onChange}) {
    return(
        <div className="form">
            <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
            <button onClick={onCreate}>추가</button>
        </div>
    )
}

export default Form;