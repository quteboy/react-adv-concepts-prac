import React, {Component, Fragment} from 'react';

const Hoc = (Component, data) => {
    // console.log(data)
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                count: data,
                name: JSON.stringify(localStorage.getItem("username"))
            }

        }

        handleClick = () => {
            this.setState({
                count: this.state.count + 1
            })
        }

        render() {
            return (
                <Fragment>
                    Hello <br/> <Component userName={this.state.name} CountNumber={this.state.count}
                                           handlToggle={this.handleClick}/>
                </Fragment>

            )
        }
    }
};

export default Hoc;