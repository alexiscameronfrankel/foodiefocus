import React, { Component } from 'react';
import Timer from 'react-compound-timer'

let alarm = new Audio("./alarm.mp3")

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
            time: 54000,
            callback: () => console.log('Checkpoint B'),
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





            {/* <Button>Short Break</Button>
            <Button>Long Break</Button> */}
                
            </div>
        );
    }
}

export default Pomodorocountdown;