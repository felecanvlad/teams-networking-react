import { Component } from 'react';
import './App.css';
import { PersonsTable } from './PersonsTable';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons : []
    }
  }

  componentDidMount () {
    this.load();
  }

  load() {
    fetch("http://localhost:3000/teams-json")
    .then(res => res.json())
    .then(persons => {
        this.setState({
          persons 
        });
    });
}
  render () {
    console.debug(this.state.persons);
    return (
      <div>
        <h1>Teams Networking</h1>
        <div>Search</div>
        <PersonsTable persons = {this.state.persons} border = {1} />
      </div>
    );
  }
}

export default App;
