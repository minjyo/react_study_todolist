import React, {Component} from 'react';
import './App.css';
import Template from './component/Template'
import Form from './component/Form'
import ItemList from './component/ItemList'

class App extends Component{

  id=3 

  state = {
    input: '',
    item: [
      {id: 0, text: 'todo1', check:true},
      {id: 1, text: 'todo2', check:false},
      {id: 2, text: 'todo3', check:true}
    ]
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value //해당 이벤트 객체의 값을 읽어옴
    })
  }

  handleCreate = () => {
    const {input, item} = this.state //현재 값을 읽어옴
    
    this.setState({
      input: '',
      item: item.concat({ //새로운 아이템 추가
        id: this.id++,
        text: input,
        check: false
      })
    })
  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleComplete = (id) => {
    const {item} = this.state;

    const index = item.findIndex(item => item.id == id)
    const select = item[index]
    const next = [...item]

    next[index] = { //선택한 아이템의 check값 변경, 나머지는 유지
      ...select,
      text: select.text+' (done)',
      check: !select.check
    }

    this.setState({
      item: next
    })
  }

  handleDelete = (id) => {
    const {item} = this.state;
    this.setState({
      item: item.filter(item => item.id!=id)
    })
  } 

  render(){
    const {input, item} = this.state
    const {handleKeyPress, handleChange, handleCreate, handleComplete, handleDelete} = this;

     return(
      <Template
        form={(
        <Form value={input}
        onCreate={handleCreate}
        onKeyPress={handleKeyPress}
        onChange={handleChange}>
        </Form>
        )}
        list={(
        <ItemList item={item} 
        onComplete={handleComplete}
        onDelete={handleDelete}>
        </ItemList>
        )}>
      </Template>
     )
  }
}

export default App;
