import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchField } from './+state/actions';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { ErrorBoundry } from './components/ErrorBoundry/error-boundry.component';
import { Scroll } from './components/scroll/scroll.component';
import { SearchBox } from './components/search-box/search-box.component';

const mapStateToProps = state => {
  return {
    searchField: state.searchField
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
  }
}
class App extends Component {

  constructor() {
    super();

    this.state = {
      friends: []
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
    const { friends } = this.state;
    const { searchField, onSearchChange } = this.props;
    const filteredFriends = friends.filter(friend => friend.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
      <h1>My Friends</h1>
        <SearchBox placeholder='search friends' handleChange={onSearchChange}></SearchBox>
        <Scroll>
        <ErrorBoundry>
          <CardList friends={filteredFriends}></CardList>
        </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
