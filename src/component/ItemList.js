import React, {Component} from 'react';
import './ItemList.css';
import PropTypes from 'prop-types';
import Item from './Item'

class ItemList extends Component {

    outFolder(){
        this.props.onSetState({case: 1})
    }

    render(){
        let{cur, item, onComplete, onDelete} = this.props

        let pitem= item.filter(item => item.p_id==cur)
        console.log(cur)
        let itemlist = pitem.map(
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
                <button onClick={this.outFolder.bind(this)}>폴더 나가기</button>
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