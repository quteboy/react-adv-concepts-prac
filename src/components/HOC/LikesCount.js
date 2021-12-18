import React, {Component, Fragment} from 'react';
import HOC from "./HOC";

class LikesCount extends Component {


    render() {
        return (
            <Fragment>
                <h2>{this.props.CountNumber}</h2><br/>
                <button onClick={this.props.handlToggle}>Like Me</button>
            </Fragment>
        );
    }
}

const EnhancedLikes = HOC(LikesCount,5)
export default EnhancedLikes