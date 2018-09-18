import React, { Component } from 'react';
import './App.css';
import Button from './Button';
import uuid from 'uuid';
class App extends Component {
  constructor(props){
    super(props);
      this.state = {
        list:[],
        inputValue: '',
    }
  }
  
  
  //user has to add things using input field
  //show user the updated list
handleChange=(e)=>{
  this.setState({inputValue: e.target.value})
};


handleSubmit=(e)=>{
  e.preventDefault();
  const newList = this.state.list.slice();
  newList.push(this.state.inputValue);
  this.setState({list: newList, inputValue: ''})
};

renderList =()=>{
  return this.state.list.map((item, index) =>{
    return <li key={uuid.v4()}>{item}</li>
  })
}


  render() {
    return (
      <div className="App">
      <form onSubmit={(e)=> this.handleSubmit(e)}>
      <h2>Todo list</h2>
      <div>
        <input value={this.state.inputValue} type="text"  
        onChange={(e) => this.handleChange(e)}/>
        <Button type='submit'/>
        </div>
        {this.renderList()}
        </form>
      </div>
    );
  }
}

export default App;
