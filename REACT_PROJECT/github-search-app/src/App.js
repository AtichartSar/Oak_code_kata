
import './App.css';

import React, { Component } from 'react'
import SearchForm from './components/SearchForm';
import Header from './components/Header';
import Profiles from './components/Profiles ';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      searchText: 'nsebhastian',
      data: '',
    }
  }
  
  fetchSearch = username => {
    console.log("username",username);
    const API = 'https://api.github.com/';
    let url = `${API}search/users?q=${username}`;
    console.log("url",url);
    fetch(url)
    .then((res) => res.json() )
    .then((data) => {
      console.log(data);
      this.setState({
        data: data
      });
    })
    .catch((error) => console.log('Oops! . There Is A Problem' + error) )
  }
  componentDidMount() {
    this.fetchSearch(this.state.searchText);
  }
  render() {
    return (
      <div>
       
        <Header/>
        <SearchForm
          fetchSearch={this.fetchSearch}
        />
        <Profiles
          data={this.state.data}
        />
      </div>
    );
  }
}

