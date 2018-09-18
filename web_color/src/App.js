import React, {Component} from 'react';
import './App.css';
import Card from './Card';
//<Card color='#FF6663'/>
//<input type='color'>

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      inputValue: '#FF7963',
    }
  }

  onInputColorChange(){
      console.log()
  }
 
  render() {
    return (
      <div className = "App">
      <div><input type='text'></input></div>
        <div><Card color={this.state.inputValue}/></div>
      </div>
    );
  }
}

export default App;
