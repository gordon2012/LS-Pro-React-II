import React, { Component } from 'react';
import '../App.css';

export default class Clock extends Component {
    constructor(props) {
        super(props);
        this.tick = this.tick.bind(this);
        this.state = {date: new Date()};
    }

    tick() {        
        this.setState({date: new Date()});
    }

    componentDidMount() {
        setInterval(this.tick, 1000)
    }
    
    render() {
        return (
            <div className="Clock">
                <span>{ this.state.date.toLocaleTimeString() }</span>
            </div>
        );
    }
}
