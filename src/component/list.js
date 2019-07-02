import React from 'react';
import FolderList from "./FolderList";
import ItemList from "./ItemList";

//케이스 리스트
const list = props => {

    switch(props.type){
        case 1:
            return <FolderList {...props}/>
        case 2:
            return <ItemList {...props} />
        default:
            return <FolderList {...props} />
    }
}


export default list ;