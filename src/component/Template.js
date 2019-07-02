import React, {Component} from 'react';
import './Template.css';
import PropTypes from 'prop-types';

class Template extends Component{

    state = {
        folderlist: undefined,
        list: undefined
    }

    static getDerivedStateFromProps(props,state){
        let prevProps = props.prevProps || {} //처음엔 undefined

        if(prevProps !== props){ //props가 변경되면 변경된 것을 추가
            return { prevProps: props, ...props}
        }
        return null;
    }

    handleSetState = state => {
        this.setState(state, () => { //state를 변경한 뒤에 call back 함수 실행
            console.log("callback in Template", this.state)
          })
    }

    render(){

    const {createFolder, form, list, folderlist} = this.props

        return(
            <div className="template">
                <div className="title">
                    To-do list
                </div>
                <button onClick={createFolder}>폴더 생성</button>
                <section className="folderlist">
                    {folderlist}
                </section>
                <section className="form_container">
                    {form}
                </section>
                <section className="list_container">
                    {list}
                </section>
            </div>
        )
    }
}

// Template.propTypes = {
//     form: PropTypes.form.isRequired,
//     list: PropTypes.array.isRequired
// }

export default Template;