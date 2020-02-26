import React, { Component } from 'react';
import {
    Link
  } from "react-router-dom";


class Home extends Component {

    state = {
        name:""
    }

    handlePersonTyping = (e) => {
        
        this.setState({
            
            
            [e.target.name]:e.target.value,
        
        
        }) 
    
        
    }


    submitting = (e) => {
        e.preventDefault()
      
        let category = this.state.name;

        this.props.handlePersonInputting(category)
    
      
      }





    render() {
        return (
            <div>
                 <Link to="/maintimer">
                    <p>Click here to start working</p>


                </Link>



                <form onSubmit={this.submitting}>
                <label>Enter your podcast genre (ex:meditation, nutrition, dogs)</label><br/>
                <input type="text" id="fname" name="name" onChange={this.handlePersonTyping}/><br/>
                <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

export default Home;