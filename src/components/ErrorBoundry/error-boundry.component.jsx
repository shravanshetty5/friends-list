import React, { Component } from 'react';

export class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
        }
    }

    componentDidCatch(error, info) {
        this.setState({hasError: true});
    }

    render() {
        if (this.state.hasError) {
            return <h1> Looks like I messed up. Will fix this soon. Sorry for the inconvinience <span role="img" aria-label="Thank you">🙏</span></h1>
        }
        return this.props.children
    }
}