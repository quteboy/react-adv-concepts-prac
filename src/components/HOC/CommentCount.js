import React, {Component, Fragment} from 'react';
import HOC from "./HOC";

class CommentCount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: 0
        }
    }

    handleComments = () => {
        this.setState({
            comments: this.state.comments + 1
        })
    }

    render() {
        return (
            <Fragment>
                <h2>{this.props.CountNumber}</h2><br/>
                <button onClick={this.props.handlToggle}>Comment on Me</button>
            </Fragment>
        );
    }
}

const EnhancedComments = HOC(CommentCount,10);
export default EnhancedComments