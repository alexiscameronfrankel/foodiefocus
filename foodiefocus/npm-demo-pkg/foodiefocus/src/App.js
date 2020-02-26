import React, { Component } from 'react';

import axios from "axios";
import './App.css';
import './components/Home';
import Shortbreak from './components/Shortbreak';
import Longbreak from './components/Longbreak';
import Pomodorocountdown from './components/Pomodorocountdown'
import {Switch, Route} from "react-router-dom";
import Home from './components/Home'



class App extends Component {

  state = {
    podcasts: [],
    name: "",
    image: "",
    title_original:"",
    audio:"",
    pomodoro: 0

  }



changeRenderPomodoroAmount = () => {
  let incrementedPomodoro = this.state.pomodoro + 1
  this.setState({
          
          
      pomodoro: incrementedPomodoro
  
  
  })
}


  handlePersonInputting = (input) => {

    console.log("you submitted from home")
    
    this.setState({
        
        
        category: input
    
    
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


  render() {
  
    return (
      <div>

      <Switch>
          <Route exact path="/" render={props => <Home {...props} handlePersonInputting={this.handlePersonInputting}/>}/> {/* says if url is homepage (/) then just show the home */}
          <Route exact path="/maintimer" render={props => <Pomodorocountdown {...props}  allpodcasts={this.state.podcasts} alljokes={this.state.jokes}/>}/>
          <Route exact path="/longbreak" render={props => <Longbreak {...props} changeRenderPomodoroAmount={this.changeRenderPomodoroAmount} categorychosen={this.state.category} allpodcasts={this.state.podcasts} alljokes={this.state.jokes} />}/>
          <Route exact path="/shortbreak" render={props => <Shortbreak  {...props} categorychosen={this.state.category} allpodcasts={this.state.podcasts} alljokes={this.state.jokes} />}/>
      </Switch>

      
      </div>
    );
  }
}



export default App;