import React, { Component } from 'react';
import axios from "axios"

class App extends Component {

  state = {
    podcasts: []

  }

 


  async componentDidMount(){
    //console.log('happens once on mount')


    //.then promise 
    axios.get('https://listen-api.listennotes.com/api/v2/search?q=star%20wars&show_podcasts=1&show_genres=1&safe_mode=1',{headers: {'X-ListenAPI-Key': '4a61357b39b247419a27150332f26732'}}).then(res => { //This takes some time by the time it gets back 
      console.log(res)
        this.setState({
          podcasts:res.data.results
        }) 
    })

    // const unirest = require('unirest');

    // const response = await unirest
    // response.toJSON();
  
  }
  

  showThePodcasts = (parameter) => { 
    return parameter.map(eachPodcast => {
      return (

        <audio controls>
        <source src={eachPodcast.audio} type="audio/mpeg" />
      </audio>
      )
    })
  }


  render() {
    console.log(this.state)
    return (
      <div>
     
        {this.showThePodcasts(this.state.podcasts)}
      </div>
    );
  }
}



export default App;