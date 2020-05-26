import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestRobots, setSearchField } from './+state/actions';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { ErrorBoundry } from './components/ErrorBoundry/error-boundry.component';
import { Scroll } from './components/scroll/scroll.component';
import { SearchBox } from './components/search-box/search-box.component';

const mapStateToProps = (state) => {
  return {
    searchField: state.searchFriends.searchField,
    friends: state.requestFriends.friends,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    requestFriends: () => dispatch(requestRobots()),
  };
};
class App extends Component {
  componentDidMount() {
    this.props.requestFriends();
  }

  render() {
    const { searchField, onSearchChange, friends } = this.props;
    const filteredFriends = friends.filter((friend) =>
      friend.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className='App'>
        <h1>My Friends</h1>
        <SearchBox
          placeholder='search friends'
          handleChange={onSearchChange}
        ></SearchBox>
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
