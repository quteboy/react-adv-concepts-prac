import React, {Component, Fragment} from 'react';

class RefDemo extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef()

    }

    componentDidMount() {
        this.inputRef.current.focus()
        this.inputRef.current.placeholder = 'This is placeholder value'
        console.log(this.inputRef)
        console.log('This is ClassName ------>', this.inputRef.current.className)
    }

    onSubmit = () => {
        console.log('Value is Here ------>', this.inputRef.current.value)
    }

    render() {
        return (
            <Fragment>
                <input className='xyz' ref={this.inputRef} type="text"/>
                <button onClick={this.onSubmit}>click Me</button>
            </Fragment>
        );
    }
}

export default RefDemo;