import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';

class App extends Component {
  isKannada = false;

  constructor() {
    super();

    this.state = {
      friends: [],
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((resp) => resp.json())
      .then(users => this.setState({
        friends: users
      }))
  }
  render () {
    return (
      <div className="App">
        <CardList friends={this.state.friends}></CardList>
      </div>
    );
  }
  
}

export default App;
