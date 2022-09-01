import React from "react";
import './App.css';
import CardList from "./components/card-list/card-list.component";
import SearchBox from './components/search-box/search-box';

export default class App extends React.Component {
  constructor (){
    super();
    this.state = {
      monsters: [],
      searchField:''
    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(res=> {
      this.setState({monsters: res});
    });
  }
  searchHandler = (data) => {
    // console.log(data)
    this.setState({searchField: data?.search});
  }

  render(){
    console.log("app render")
    const { monsters, searchField} = this.state;
    let filteredMonsters = monsters;
    if(searchField != ''){
      filteredMonsters = monsters.filter(mon => mon.name.toLowerCase().includes(searchField.toLowerCase()));
    }
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox searchHandler={this.searchHandler} placeholder="Search Monster"/>
        <CardList monsters={filteredMonsters} />
      </div>
    );
    
  }
}
