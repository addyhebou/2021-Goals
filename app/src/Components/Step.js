import React, { Component } from 'react'
console.log("we here")
export default class Step extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             taskName: this.props.children,
        }
    }
    
    render() {
        return (
            <div className = "Step">
                <h2>{this.state.taskName}</h2>
            </div>
        )
    }
}

