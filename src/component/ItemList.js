import React, {Component} from 'react';
import './ItemList.css';
import PropTypes from 'prop-types';
import Item from './Item'

class ItemList extends Component {
    render(){
        const{ item, onComplete, onDelete} = this.props

        const itemlist = item.map(
            ({id, text, check}) => (
                <Item
                    key={id}
                    id={id}
                    text={text}
                    check={check}
                    onComplete={onComplete}
                    onDelete={onDelete}
                    
                />
            )
        )

        return(
            <div>
                {itemlist}
            </div>
        )
    }
}

// this.props = {
//     todo,
//     onCreate,
//     onDelete
// }

export default ItemList;