import React from 'react';
class Stopwatch extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            number: props.startAt || 0,
            timer: false
        };
    }

    render() {
        return (
            <div>
                <h1>Stopwatch</h1>
                <h2>Elapsed Time</h2>
                <h2>{this.state.number} seconds</h2>
                <button
                onClick={this._startTimer}>
                    Start
                </button>
                <button
                onClick={this._stopTimer}>
                    Stop
                </button>
                <button
                onClick={this._resetTimer}>
                Reset
                </button>
            </div>
        )
    }
    _startTimer = () => {
        if(!this.state.number) {
            this.interval = setInterval(() => {
            this.setState({
                number: this.state.number + 1
            });
        }, 1000)
        } else if(this.state.number) {
            clearInterval(this.interval);
                this.interval = setInterval(() => {
                    this.setState({
                        number: this.state.number + 1
                    })
                }, 1000)
            }
        
    }
    _stopTimer = () => {
        clearInterval(this.interval);
    } 
    _resetTimer = () => {
        clearInterval(this.interval);
        this.setState({
            number: 0
        });
    }
}

export default Stopwatch;