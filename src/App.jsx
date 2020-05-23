import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { Scroll } from './components/scroll/scroll.component';
import { SearchBox } from './components/search-box/search-box.component';
class App extends Component {
  isKannada = false;

  constructor() {
    super();

    this.state = {
      friends: [],
      searchString: ''
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((resp) => resp.json())
      .then(users => this.setState({
        friends: users
      }))
  }

  handleChange = (event) => {
    this.setState({searchString: event.target.value})
  }
  render () {
    const { friends, searchString } = this.state;
    const filteredFriends = friends.filter(friend => friend.name.toLowerCase().includes(searchString.toLowerCase()));
    return (
      <div className="App">
      <h1>My Friends</h1>
        <SearchBox placeholder='search friends' handleChange={this.handleChange}></SearchBox>
        <Scroll>
          <CardList friends={filteredFriends}></CardList>
        </Scroll>
      </div>
    );
  }
  
}

export default App;
