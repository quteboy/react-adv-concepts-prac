import React, {Component} from 'react';
import {Button, Typography} from "@material-ui/core";

class Challenge2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isContentHide: false
        }
        this.hideToggle = this.hideToggle.bind(this)
    }

    hideToggle = () => {
        this.setState({
            isContentHide: !this.state.isContentHide
        })
    }

    render() {
        return (<div>
                {this.state.isContentHide ? <Typography variant='h5'>
                    this will Be shown after button CLick
                </Typography> : null}
                <Button onClick={this.hideToggle}>
                    Click Me
                </Button>
            </div>);
    }
}

export default Challenge2;