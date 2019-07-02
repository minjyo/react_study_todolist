import React, {Component} from 'react';
import './Folder.css';
import Folder from './Folder'


class FolderList extends Component {

    state = {
        folder: undefined
    }
    
    static getDerivedStateFromProps(props,state){
        let prevProps = state.prevProps || {} //처음엔 undefined

        if(prevProps !== props){ //props가 변경되면 변경된 것을 추가
            return { prevProps: props, ...props}
        }
        return null;
    }

    //함수가 호출될 당시의 객체의 id를 받아옴
    deleteFolder = id => {
        const {folder} = this.state;
        this.setState({
            folder: folder.filter(folder => folder.id!=id)}, () => {
            //onSetState함수가 있는가?
            this.props.onSetState && this.props.onSetState({folder: this.state.folder})
        })
    }

    inFolder = id => {
        this.setState({} , () => {
            //onSetState함수가 있는가?
            this.props.onSetState && this.props.onSetState({case: 2, cur: id})
        })
        //return id: 이런건 못함
    }

    render(){
        const {folder, data} = this.props

        const folderlist = folder.map(
            ({id, text, data}) => (
                <Folder 
                    id={id}
                    text={text}
                    data={data}
                    inFolder={this.inFolder}
                    deleteFolder={this.deleteFolder}
                />
            )
        )

        return(
            <div>
                <div>
                    {folderlist}
                </div>
            </div>
        )
    }
}

export default FolderList;
