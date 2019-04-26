import React from 'react';
class Stopwatch extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            number: props.startAt || 0
        };
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                number: this.state.number + 1
            });
        }, 1000);
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
            </div>
        )
    }
    _startTimer = () => {
        this.setState({

        })
    }
    _stopTimer = () => {
        this.setState({
            
        })
    }
}

export default Stopwatch;