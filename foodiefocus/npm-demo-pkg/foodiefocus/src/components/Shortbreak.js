import React, { Component } from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Timer from 'react-compound-timer'



let alarm = new Audio("./alarm.mp3")


class Shortbreak extends Component {

  state = {
    podcasts: [],
    name: "",
    image: "",
    title_original:"",
    audio:""

  }



  playAlarm = () => {
    alarm.play();
    }

    
    componentDidMount(){

      // doing a get request based on the catergory that was entered in Home component
      console.log("we are mounting, yeeha!")
      console.log(this.props)
      this.newGetRequestForPodcast()

        //this gets an initial joke
        this.getAJoke() //equivalent to clicking the button

      } 

      newGetRequestForPodcast = () => {
        if(this.props.categorychosen !== "") {
          
          axios.get(`https://listen-api.listennotes.com/api/v2/search?q=${this.props.categorychosen}&sort_by_date=0&type=episode&len_min=9&len_max=11&only_in=title%2Cdescription&language=English`,{headers: {'X-ListenAPI-Key': '4a61357b39b247419a27150332f26732'}}).then(res => { //This takes some time by the time it gets back 
          // console.log(res)
            this.setState({
              podcasts:res.data.results,
              image: "",
              title_original:"",
              audio:""
            }) 
          })
        }
      }


   

 
      getAJoke = () => {

        ///HERE IS THE JOKES API GET REQUEST///

        axios.get(`https://sv443.net/jokeapi/v2/joke/Any?blacklistFlags=nsfw,racist,sexist&type=single`).then(res => { //This takes some time by the time it gets back 
        console.log(res)
                this.setState({
                jokes:res.data.joke
                    }) 
                })
    }
    
  

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




/// BUGS: on second press...name becomes ""...on third submit name becomes undefined

submitting = (e) => {
  e.preventDefault()
  // this.setState({
        
        
  //   name:e.target.value
    


  // }) 
console.log(this.state.name)
console.log('submit button is being pressed')



  let category = this.state.name;

  if(this.state.name !== "") {

  axios.get(`https://listen-api.listennotes.com/api/v2/search?q=${category}&sort_by_date=0&type=episode&len_min=4&len_max=6&only_in=title%2Cdescription&language=English`,{headers: {'X-ListenAPI-Key': '4a61357b39b247419a27150332f26732'}}).then(res => { //This takes some time by the time it gets back 
  // console.log(res)
    this.setState({
      podcasts:res.data.results,
      image: "",
      title_original:"",
      audio:""
    }) 
  })
}

}








  render() {
    // console.log(this.state.name) //WHY IS THIS UNDEFINED???
    return (
      <div>

{/* 
HERE IS MY LINK TO THE THE MAIN TIMER  */}

<Link to="/maintimer"> <Button variant="primary">LINK TO MY MAIN TIMER</Button></Link>


  {/* BELOW IS MY Timer */}

   <Timer
            initialTime={10000}
            direction="backward"
            startImmediately={false}
            timeToUpdate={100}
            checkpoints={[
                {
                    time: 0,
                    callback: () => this.playAlarm(), 
                },
                {
                    time: 0,
                    callback: () => console.log('alarm is sounding'), 
                },
                // {
                //     time: 0,
                //     callback: () =>this.props.changeRenderPomodoroAmount(this.props.pomodoro),
                // },
                // {
                //     time: 0,
                //     callback: () =>console.log(`You have done ${this.props.pomodoro} pomodoros`),
                // }
            ]}
        >
        {({ start, resume, pause, stop, reset }) => (
            <React.Fragment>
                <div>
                    {/* <Timer.Days /> days
                    <Timer.Hours /> hours */}
                    <Timer.Minutes /> minutes
                    <Timer.Seconds /> seconds
                    {/* <Timer.Milliseconds /> milliseconds */}
                </div>
                {/* <div>{timerState}</div> */}
                <br />
                <div>
                    <button onClick={start}>Start</button>
                    <button onClick={pause}>Pause</button>
                    <button onClick={resume}>Resume</button>
                    <button onClick={stop}>Stop</button>
                    <button onClick={reset}>Reset</button>
                </div>
            </React.Fragment>
        )}
    </Timer>

<p>{this.state.jokes}</p>
        <button onClick={this.getAJoke}>Click here to LOL</button>
        {this.showThePodcasts(this.state.podcasts)}
      </div>
    );
  }
}



export default Shortbreak;