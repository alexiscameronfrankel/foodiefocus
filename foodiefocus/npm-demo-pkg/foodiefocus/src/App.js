import React, { Component } from 'react';
import axios from "axios"

class App extends Component {

  state = {
    podcasts: []

  }



 


  async componentDidMount(){
    //console.log('happens once on mount')


    //.then promise 
    axios.get('https://listen-api.listennotes.com/api/v2/search?q=nutrition&type=episode&len_min=4&len_max=6&language=English',{headers: {'X-ListenAPI-Key': '4a61357b39b247419a27150332f26732'}}).then(res => { //This takes some time by the time it gets back 
      console.log(res)
        this.setState({
          podcasts:res.data.results
        }) 
    })

    // const unirest = require('unirest');

    // const response = await unirest
    // response.toJSON();
  
  }

  // 1. use math.random to pick a random podcast???
  

  showThePodcasts = (parameter) => { 
    return parameter.map(eachPodcast => {
      console.log(eachPodcast)
      return (
      <div>
      <img src={eachPodcast.image} alt={eachPodcast.title_original}/>
      <p>{eachPodcast.title_original}</p>
      <audio controls>
        <source src={eachPodcast.audio} type="audio/mpeg" />
      </audio>
      </div>
      )
    })
  }


  render() {
    return (
      <div>
     
        {this.showThePodcasts(this.state.podcasts)}
      </div>
    );
  }
}



export default App;