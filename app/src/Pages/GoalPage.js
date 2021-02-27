import React, { Component } from 'react'
import Step from '../Components/Step'
import Goals from '../Data/Goals.json'
import '../App.scss';

let title = "Music Creator";
let task = "Producer Brand";

// (Goals[title]["Tasks"][task]["Steps"]).map((step) =>{
//     console.log(step);
// })


// {console.log(Goals[this.state.title]["Tasks"][this.state.task]["Steps"][0])};




export default class GoalPage extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            title: this.props.location.state.title,
            tasks: this.props.location.state.tasks,
            displaySteps: false,
        }
    }

    displaySteps = () =>{
        this.setState({
            displaySteps: !this.state.displaySteps,
        });
        this.state.displaySteps ? (
            console.log("Display on")
        ) : (
            console.log("Display off")
        );
    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <h2 className = "Task Task_Mobile">{this.state.task}</h2>
                {this.state.tasks.map((task) => {
                    // {console.log(Goals[this.state.title]["Tasks"][task]["Steps"])};
                    return (
                        <div>
                            <div className = "Task Task_Mobile">
                                <h2 onClick={this.displaySteps.bind(null, !this.state.displaySteps)}>{task}</h2>
                            </div>
                            { this.state.displaySteps && 
                                <div>
                                    {/* {(Goals[this.state.title]["Tasks"][task]["SMART Goal"] != "") ? (
                                        return (
                                            <h3></h3>
                                        )
                                    ):(continue)
                                    } */}
                                    <h3 className = "SMARTGoal">{Goals[this.state.title]["Tasks"][task]["SMART Goal"]}</h3>
                                    {Goals[this.state.title]["Tasks"][task]["Steps"].map((step) =>
                                        {
                                            return (
                                                <Step>{step}</Step>
                                            )
                                        }
                                    )}
                                </div>
                            }
                        </div>
                    )
                })}
            </div>
        )
    }
}


{/* // {if (this.state.displaySteps){ */}
{/* //                                         Goals[this.state.title]["Tasks"][task]["Steps"]).map((step) =>{
//                                             return <Step>{step}</Step>
//                                         }
//                                     }}
 */}
