import React, {Component, Fragment} from 'react';

class NormalComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    handleCount = () => {
        this.setState({count: 0})
    }

    render() {
        console.log('Normal Component Executed')
        return (
            <Fragment>
                <h2>This is Normal Component</h2>
                <button onClick={this.handleCount}>{this.state.count}Click me</button>
            </Fragment>
        );
    }
}

export default NormalComponent;