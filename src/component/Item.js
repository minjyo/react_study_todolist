import React, {Component} from 'react';
import './Item.css';
import PropTypes from 'prop-types';

class Item extends Component{

    state = {
        case:1,
        input:''
    }

    onUpdate = (e) => {
        if(this.state.case==1){ //입력 전
            this.setState({case:2})
        }else{ //입력 후 
           let item = [...this.props.item] //배열로 가져옴
           let item2 = {...this.props.item} //오브젝트로 가져옴
           
           console.log(item)
           console.log(item2)

           item[this.props.id].text = this.state.input
            this.props.onSetState({item })
            this.setState({
                case: 1 
            })
        }
    }

    onChange = (e) => {
        this.setState({input: e.target.value})
        console.log(this.state.input)

    }

    render(){
        const {id, onComplete, onDelete, onUpdate} = this.props;
        return(
            <div className="item">
                <div className="item_text">
                    {this.state.case==1 ? //1일때 원본, 2일때 입력, 3일때 업데이트
                        this.props.text
                        : <input value={this.state.input} onChange={this.onChange} onKeyPress={this.KeyPress}/>
                    }
                </div>
                <div>
                    <button onClick={() => onComplete(id)}>완료</button>
                    <button onClick={() => onDelete(id)}>삭제</button>
                    <button onClick={this.onUpdate}>수정</button>                    
                </div>
            </div>
            
        )
    }
}

export default Item;