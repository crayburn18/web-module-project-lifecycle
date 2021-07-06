import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {

  state = {
    user: {
      name:'',
      bio:'',
      avatar:'',
      url:''
    },
    follower: {
      user:'',
      avatar:'',
      url:''
    }
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/crayburn18')
      .then(res => {
        console.log(res.data)
      }).catch(err => {
        console.log(err)
      });

    axios.get('https://api.github.com/users/crayburn18/followers')
      .then(res => {
        console.log(res.data)
      }).catch(err => {
        console.log(err)
      });
  }

  render() {
    return (
      <div>
        <div>
          <h1>User Card</h1>
          <img src="https://avatars.githubusercontent.com/u/61172495?v=4"></img>
          <div></div>
        </div>
      </div>
    );
  }
}


export default App;
