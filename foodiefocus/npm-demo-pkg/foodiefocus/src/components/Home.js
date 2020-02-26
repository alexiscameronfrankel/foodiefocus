import React, { Component } from 'react';
import {
    Link
  } from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div>
                 <Link to="/maintimer">
                    <p>Click here to start working</p>
                </Link>
            </div>
        );
    }
}

export default Home;