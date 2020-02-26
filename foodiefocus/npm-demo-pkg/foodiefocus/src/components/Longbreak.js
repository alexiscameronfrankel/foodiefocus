import React, { Component } from 'react';
import axios from "axios";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {
  Link
} from "react-router-dom"; 



class Longbreak extends Component {
    state = {
        podcasts: [],
        jokes: [],
        name: "",
        image: "",
        title_original:"",
        audio:"",
     
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
    
    
    //   handlePersonTyping = (e) => {
        
    //     this.setState({
            
            
    //         [e.target.name]:e.target.value,
        
        
    //     }) 
    
        
    // }
    


    
    
          submitting = (e) => {
            e.preventDefault()
            // this.setState({}
            //   name:e.target.value
              
          
          
            // }) 
          console.log(this.state.name)
          console.log('submit button is being pressed for long break')
          
          
          
            // let category = this.state.name;
          
            if(this.state.name !== "") {
          
            axios.get(`https://listen-api.listennotes.com/api/v2/search?q=${this.props.category}&sort_by_date=0&type=episode&len_min=9&len_max=11&only_in=title%2Cdescription&language=English`,{headers: {'X-ListenAPI-Key': '4a61357b39b247419a27150332f26732'}}).then(res => { //This takes some time by the time it gets back 
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
      console.log(this.props)
        return (
          <div>

        {/* HERE  A BUTTON THAT LINKS TO THE HOME PAGE TO CHANGE CATEGORY  */}


        <Link to="/"> <Button variant="primary">CHANGE CATEGORY</Button></Link>


        {/* HERE  A BUTTON THAT LINKS TO THE TIMER  */}



        <Link to="/maintimer"><Button variant="primary">LINK TO MY MAIN TIMER</Button></Link>



        <div className="flexin">
            {this.showThePodcasts(this.state.podcasts)}
        </div>


        {/* HERE IS THE JOKE BUTTON BELOW */}

        <p>{this.state.jokes}</p>
        <button onClick={this.getAJoke}>Click here to LOL</button>

          </div>
        );
      }
    }
    
    

export default Longbreak;

