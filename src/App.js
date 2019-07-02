import React, {Component} from 'react';
import './App.css';
import Template from './component/Template'
import Form from './component/Form'
import ItemList from './component/ItemList'
import FolderList from './component/FolderList'
import List from "./component/list"
class App extends Component{

  id=6 
  f_id=3

  state = {
    cur: -1,
    case: 1,
    folder: [
      {id: 0, text: 'folder1', data: ItemList},
      {id: 1, text: 'folder2', data: ItemList},
      {id: 2, text: 'folder3', data: ItemList},
    ],
    input: '',
    item: [
      {p_id:0, id: 0, text: 'todo1', check:true},
      {p_id:1, id: 1, text: 'todo2', check:false},
      {p_id:1, id: 2, text: 'todo3', check:false},
      {p_id:2, id: 3, text: 'todo4', check:true},
      {p_id:2, id: 4, text: 'todo5', check:true},
      {p_id:2, id: 5, text: 'todo6', check:true}
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
        p_id: this.state.cur,
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

  handleUpdate = (id) => {

    
    // this.setState({
    //   input: 
    // })
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
    console.log(id)
    this.setState({
      item: item.filter(item => item.id!=id)
    })
  } 
  
  createFolder = () => {
    const {folder} = this.state;
    
    this.setState({
      folder: folder.concat({ //새로운 아이템 추가
        text: 'folder'+this.f_id,
        id: this.f_id++,
        data: ''
      })
    })
  }

  //다른 클래스에서 이곳의 state를 변경하기 위한 함수
  handleSetState = state => {
    console.log("this.state", state)
    this.setState(state, () => { //state를 변경한 뒤에 call back 함수 실행
      console.log("callback", this.state)
    })
  }

  render(){
    const {cur, folder, input, item} = this.state
    const {handleKeyPress, handleChange, handleCreate, handleComplete, handleDelete} = this;

     return(
      <Template 
        createFolder={this.createFolder}
        folderlist={
          // <List //케이스별로 나누어서 분류
          //   type={this.state.case}
          //   folder={folder}
          //   onSetState={this.handleSetState}
          //   data={this.data}
          //   item={item} 
          //   onComplete={handleComplete}
          //   onDelete={handleDelete}
          //   onSetState={this.handleSetState} 
          // />
          this.state.case==1 ? 
            <FolderList 
              folder={folder}
              onSetState={this.handleSetState}
              data={this.data}>
            </FolderList>
          : <ItemList cur={cur}
              item={item} 
              onComplete={handleComplete}
              onDelete={handleDelete}
              onUpdate={this.handleUpdate}
              onSetState={this.handleSetState}>
            </ItemList>
        }
        form={(
        <Form value={input}
        onCreate={handleCreate}
        onKeyPress={handleKeyPress}
        onChange={handleChange}>
        </Form>
        )}>
      </Template>
     )
  }
}

export default App;
