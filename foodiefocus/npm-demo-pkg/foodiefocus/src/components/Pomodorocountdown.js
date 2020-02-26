import React, { Component } from 'react';
import Timer from 'react-compound-timer'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'


let alarm = new Audio("./alarm.mp3")

class Pomodorocountdown extends Component {

    state = {
        pomodoro: 0
    }

    playAlarm = () => {
    alarm.play();
    }

changeRenderPomodoroAmount = () => {
    let incrementedPomodoro = this.state.pomodoro + 1
    this.setState({
            
            
        pomodoro: incrementedPomodoro
    
    
    })
}


// BELOW IS WHERE WE ARE RENDERING

    render() {
        return (
     <div>


        {/* HERE  A BUTTON THAT LINKS TO THE HOME PAGE TO CHANGE CATEGORY  */}


        <Link to="/"> <Button variant="primary">CHANGE CATEGORY</Button></Link>


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
                    callback: () =>this.props.changeRenderPomodoroAmount(this.props.pomodoro),
                },
                {
                    time: 0,
                    callback: () =>console.log(`You have done ${this.props.pomodoro} pomodoros`),
                }
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



 {/* HERE IS WHERE I DISPLAY THE POMODOROS */}



<p>You have done {this.props.pomodoro} pomodoros</p>





{/* HERE ARE MY BREAK BUTTONS */}
            
            <Link to="/longbreak"><Button size="lg" variant="danger">Long Break</Button></Link>
            <Link to="/shortbreak"><Button size="lg" variant="warning">Short Break</Button></Link>

            
                
            </div>
        );
    }
}

export default Pomodorocountdown;