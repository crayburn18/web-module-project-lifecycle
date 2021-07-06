import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {

  state = {
    user: []
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/crayburn18')
      .then(res => {
        console.log(res.data)
      })

    axios.get('https://api.github.com/users/crayburn18/followers')
      .then(res => {
        console.log(res.data)
      })
  }

  render() {
    return (
      <div>Hello</div>
    );
  }
}


export default App;
