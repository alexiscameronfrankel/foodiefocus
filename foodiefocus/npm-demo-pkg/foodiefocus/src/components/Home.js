import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Card from 'react-bootstrap/Card';


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
                <div className="row d-flex justify-content-center">
                <Card className="home_container col-sm-6 " border="danger" style={{ width: '50%'}}>
                    <Card.Img variant="top" src="./tomatoman.png" style={{ width: '30%'}}/>
                    <Card.Body>
                        Enter your podcast genre (ex:meditation, nutrition, dogs)
                        Halvah croissant biscuit fruitcake topping. Croissant apple pie pie. Cookie jelly bear claw powder candy canes marshmallow soufflé cake. Powder sugar plum croissant candy croissant gummi bears. Donut jelly beans ice cream liquorice ice cream cake. Marzipan cake icing chupa chups dragée jujubes tart. Bonbon cake chupa chups wafer chupa chups marshmallow sesame snaps.
                        <form onSubmit={this.submitting} className="home-main">
                    {/* <label className="home-main_text">
                    </label> */}
                    {/* <div> */}
                        <input type="text" id="fname" name="name" onChange={this.handlePersonTyping} className="home-main_input"/>
                        
                        <Link to="/maintimer"><input type="submit" value="Submit" className="home-main_submit"/> </Link>
                        
                    {/* </div> */}
                </form>
                    </Card.Body>
                </Card>
              
                </div>
            </div>
        );
    }
}

export default Home;