import React, {Component, Fragment} from 'react';
import ChildComp from "./ChildComp";

class ForwordRef extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef()
    }

    refToggle = () => {
        this.myRef.current.focus()
    }
    onToggle = () => {
        this.myRef.current.focus()
        this.myRef.current.placeholder = 'I am Clicked'
        console.log('I am Logged Value !!!!!', this.myRef.current.value)
    }

    render() {
        return (
            <Fragment>
                <div style={{border: '1px solid pink'}}>
                    <h4>Parent Ref</h4>
                    <ChildComp ref={this.myRef} handleClick={this.refToggle}/>
                    <button onClick={this.onToggle}>Click Me</button>
                </div>
            </Fragment>
        );
    }
}

export default ForwordRef;