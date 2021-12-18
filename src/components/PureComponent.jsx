import React, {Fragment, PureComponent} from 'react';

class PureComp extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    handleCount = () => {
        this.setState({count: this.state.count + 1})
    }

    render() {
        console.log('Pure Component Executed')
        return (
            <Fragment>
                <h2>This is Pure Component</h2>
                <button onClick={this.handleCount}>{this.state.count}Click me</button>
            </Fragment>
        )
    }
}

export default PureComp;