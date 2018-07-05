import React, { Component } from 'react';

class Timer extends Component {
    
    componentDidMount(){
        this.timer = setInterval(this.ticker, 1000);
    }

    constructor(props) {
        super(props);
        
        this.state = {
            clock:0
        };

        this.ticker = this.ticker.bind(this);
    }
    
    render() {
        var clock = Math.floor(this.state.clock/1000)
        return (
            <div>
                <p>You are on this site Since</p>
                <br/>
                <span>{clock}</span>
                <span>{clock}</span>
                <span>{clock}</span>
                <p>Seconds</p>
                {this.props.start}
            </div>
        );
    }

    ticker(){
        this.setState({clock : new Date() - this.props.start + 10})
    }

}

export default Timer;