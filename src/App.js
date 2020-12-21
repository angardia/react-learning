import { Component } from 'react';
import './App.css';
import DataList from './DataList/DataList';
import SearchBar from './SearchBar/SearchBar';

class App extends Component {

state = {
      users: [],
    }

  addNewUser = (userData) => {
    this.setState(prevState =>({
      users: [...prevState.users, userData]
    }))
  }
  render() {
    return (
      <div className="App">
        <SearchBar onSubmit={this.addNewUser} />
        <DataList users={this.state.users} />
      </div>
    );
  }

}

export default App;
