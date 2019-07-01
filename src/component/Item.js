import React, {Component} from 'react';
import './Item.css';
import PropTypes from 'prop-types';

class Item extends Component{
    render(){
        const {text, id, onComplete, onDelete, check} = this.props;
        return(
            <div className="item">
                <div className="item_text">
                    {text}
                </div>
                <div>
                    <button onClick={() => onComplete(id)}>완료</button>
                    <button onClick={() => onDelete(id)}>삭제</button>
                </div>
            </div>
            
        )
    }
}

export default Item;