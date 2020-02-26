import React, { Component } from 'react';
import Timer from 'react-compound-timer'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'


let alarm = new Audio("./alarm.mp3")
let pomodoro = 0;

class Pomodorocountdown extends Component {

    playAlarm = () => {
    alarm.play();
    }


    render() {
        return (
     <div>

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
                    callback: () =>pomodoro = pomodoro + 1,
                },
                {
                    time: 0,
                    callback: () =>console.log(`You have done ${pomodoro} pomodoros`),
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





            {/* <Button Link to=<Shortbreak/>></div>Short Break</Button> */}
            
            <Link to="/longbreak"><Button size="lg" variant="danger">Long Break</Button></Link>
            <Link to="/shortbreak"><Button size="lg" variant="warning">Short Break</Button></Link>
            
                
            </div>
        );
    }
}

export default Pomodorocountdown;