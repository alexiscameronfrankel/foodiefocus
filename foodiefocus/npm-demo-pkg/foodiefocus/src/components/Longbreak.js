import React, { Component } from 'react';
import axios from "axios"
import Card from 'react-bootstrap/Card'

class Longbreak extends Component {
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
        axios.get(`https://listen-api.listennotes.com/api/v2/search?q=gfhgcv&sort_by_date=0&type=episode&len_min=9&len_max=11&only_in=title%2Cdescription&language=English`,{headers: {'X-ListenAPI-Key': '4a61357b39b247419a27150332f26732'}}).then(res => { //This takes some time by the time it gets back 
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

        <span>




            <Card className ="paddingTime" bg="dark" text="white" border="warning"  style={{ width: '18rem' }}>
            <Card.Img variant="top" src={eachPodcast.image} alt={eachPodcast.title_original} />
            <Card.Body>
                <Card.Title>{eachPodcast.title_original}</Card.Title>
                <Card.Text>
                <audio className="audioStyle" controls>
                        <source src={eachPodcast.audio} type="audio/mpeg" />
                </audio>
                </Card.Text>
            
            </Card.Body>
            </Card>





        </span>
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
    
      axios.get(`https://listen-api.listennotes.com/api/v2/search?q=${category}&sort_by_date=0&type=episode&len_min=9&len_max=11&only_in=title%2Cdescription&language=English`,{headers: {'X-ListenAPI-Key': '4a61357b39b247419a27150332f26732'}}).then(res => { //This takes some time by the time it gets back 
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
        // console.log(this.state.name) //WHY IS THIS UNDEFINED???
        return (
          <div>
      <form onSubmit={this.submitting}>
      <label>Enter your podcast category below (podcast will be in between 9-11 minutes for your long break)</label><br/>
      <input type="text" id="fname" name="name" onChange={this.handlePersonTyping}/><br/>
      <input type="submit" value="Submit"/>
        </form>
        <div className="flexin">
            {this.showThePodcasts(this.state.podcasts)}
        </div>

          </div>
        );
      }
    }
    
    

export default Longbreak;