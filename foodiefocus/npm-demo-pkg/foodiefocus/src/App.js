import React, { Component } from 'react';
import axios from "axios";
import './App.css';
import Shortbreak from './components/Shortbreak';
import Longbreak from './components/Longbreak';
import Pomodorocountdown from './components/Pomodorocountdown'



class App extends Component {

  state = {
    podcasts: [],
    name: "",
    image: "",
    title_original:"",
    audio:""

  }




//right now category is defined as something that won't populate any results, but this is a messy fix
  async componentDidMount(){
    //console.log('happens once on mount')
    //.then promise
    axios.get(`https://listen-api.listennotes.com/api/v2/search?q=gfhgcv&sort_by_date=0&type=episode&len_min=4&len_max=6&only_in=title%2Cdescription&language=English`,{headers: {'X-ListenAPI-Key': '4a61357b39b247419a27150332f26732'}}).then(res => { //This takes some time by the time it gets back 
      console.log(res)
        this.setState({
          podcasts:res.data.results
        }) 
    })
  
  }
  



  // 1. use math.random to pick a random podcast???


  

  showThePodcasts = (parameter) => { 
    // console.log(this.state)
    // console.log('showThePodcasts kind of works')
    return parameter.map(eachPodcast => {
      // console.log(eachPodcast)
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


  handlePersonTyping = (e) => {
    
    this.setState({
        
        
        [e.target.name]:e.target.value,
    
    
    }) 

    
}




/// BUGS: on second press...name becomes ""...on third submit name becomes undefined

submitting = (e) => {
  e.preventDefault()
  this.setState({
        
        
    name:e.target.value
    


  }) 
console.log(this.state.name)
console.log('submit button is being pressed')



  let category = this.state.name;

  if(this.state.name !== "") {

  axios.get(`https://listen-api.listennotes.com/api/v2/search?q=${category}&sort_by_date=0&type=episode&len_min=4&len_max=6&only_in=title%2Cdescription&language=English`,{headers: {'X-ListenAPI-Key': '4a61357b39b247419a27150332f26732'}}).then(res => { //This takes some time by the time it gets back 
  // console.log(res)
    this.setState({
      podcasts:res.data.results,
      name: "",
      image: "",
      title_original:"",
      audio:""
    }) 
  })
}

}


// timer = () => {
// const timer = new TaskTimer(1000);
// timer.add(task => console.log(`Current runs: ${task.currentRuns}`)).start();

// }


  render() {
    // console.log(this.state.name) //WHY IS THIS UNDEFINED???
    return (
      <div>
  {/* <form onSubmit={this.submitting}>
  <label>Enter your podcast category below (podcast will be in between 4-6 minutes for your short break)</label><br/>
  <input type="text" id="fname" name="name" onChange={this.handlePersonTyping}/><br/>
  <input type="submit" value="Submit"/>
    </form>
        {this.showThePodcasts(this.state.podcasts)} */}
{/* 
      {this.timer} */}
      <Shortbreak/>
      <Longbreak/>
      <Pomodorocountdown/>

      
      </div>
    );
  }
}



export default App;