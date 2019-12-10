import React, { Component } from 'react';
import axios from 'axios'
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      users: [],
      store: []
    }
  }
  componentDidMount(){
    axios.get('https://randomuser.me/api/?results=10&inc=name,registered&nat=fr')
    .then(json => json.data.results.map(result=>(
      {
        name: `${result.name.first} ${result.name.last}`,
        id: result.registereds
      }
    )))
    .then(newData => this.setState({users: newData, store: newData}))
    .catch(error=>alert(error))
  }
  render() {
    const {users} = this.state
    return (
      <div className="card">
        <div className="card-header">Name List</div>
        <SearchBar searchFunc={(e) => this.filterNames(e)}/>
        <List usernames={users}/>


      </div>
      );
  }
}

export default App;