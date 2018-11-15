import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons:[{name: "max", age: 28},
              {name: "stephanie", age: 25},
            {name: "Chip", age: 30}
          ]
  }
  render() {
    return (
      <div className="App">
        <h1> Hi, I'm a react app </h1>
        <p>This is really working</p>
        <button>Switch Name</button>
        <Person name =  {this.state.persons[0].name} age = {this.state.persons[0].age} />
        <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age }/>
        <Person name = {this.state.persons[2].name} age = {this.state.persons[2].age}>hobbies: programming </Person>
      </div>
    )
  }
}

export default App;
