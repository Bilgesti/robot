import './App.css';
import React, {Component} from "react";
import { CardList } from './components/card-list';
import {SearchBox} from './components/search-box'


export default class App extends Component {
  constructor(){
    super();


    this.state = {
      monsters: [],
      searchField: ""
    };
   
  }

  componentDidMount () {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then( response  => response.json())
    .then(data => this.setState({monsters: data}));
  }

  render() {

    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()));
    

    return (
      <div className='App'>
        <h1> Search Robots</h1>
        <SearchBox onSearchChange={this.onSearchChange}/>
        <CardList monsters={filteredMonsters}/>

      </div>
    );
  }

  onSearchChange = event => {
    this.setState({searchField:event.target.value});
    
  };

 
}
