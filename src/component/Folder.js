import React, {Component} from 'react'

class Folder extends Component{

    render(){
        const {text, data, inFolder, deleteFolder} = this.props

        return(
            <div>
                <div>
                <div>{text}</div>
                <button onClick={() => inFolder(this.props.id)}>폴더 들어가기</button>
                <button onClick={() => deleteFolder(this.props.id)}>폴더 삭제</button>
                </div>
            </div>   
        )
    }

    componentDidMount(){
        
    }
    
}

export default Folder;
