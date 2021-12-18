import React, {Component} from 'react';

class CounterDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    incrementCount = (prevState) => {
        this.setState({
            counter: this.state.counter + 1
        })
    }
    decreaseCount = (prevState) => {
        this.setState({
            counter: this.state.counter - 1
        })
    }

    render() {
        if (this.state.counter === 5) {
            throw new Error('Kuch toh Gadbad hai daya')
        } else {
            return (
                <div>

                    <h2>{this.state.counter}</h2>
                    <button onClick={this.incrementCount}>Click Me</button>
                    <button onClick={this.decreaseCount}>CLick Me 2</button>
                </div>
            )
        }

    }
}

export default CounterDemo;