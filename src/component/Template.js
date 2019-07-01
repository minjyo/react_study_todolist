import React from 'react';
import './Template.css';
import PropTypes from 'prop-types';

function Template({form, list}){
    return(
        <div className="template">
            <div className="title">
                To-do list
            </div>
            <section className="form_container">
                {form}
            </section>
            <section className="list_container">
                {list}
            </section>
        </div>
    )
}

// Template.propTypes = {
//     form: PropTypes.form.isRequired,
//     list: PropTypes.array.isRequired
// }

export default Template;