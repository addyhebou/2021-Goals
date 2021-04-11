import '../App.scss'
import React, { Component } from 'react'
import GoalSet from '../Components/GoalSet'
import Navbar from '../Components/NavbarIcons'

export default class Index extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className = "GoalArray">
                    <GoalSet className = "GoalSet" title = "Music Tech CEO" color = "AFD8EF">
                        <div>Develop SoundGood</div>
                        <div>CS Degree</div>
                        <div>Intern/Work</div>
                        <div>Stellar Portfolio</div>
                    </GoalSet>
                    <GoalSet title = "Critically Acclaimed Performer" color = "F59393">
                        <div>Strasberg Training</div>
                        <div>Film Roles</div>
                        <div>Sing a Lot</div>
                        <div>Dance a Lot</div>
                    </GoalSet>
                    <GoalSet title = "Music Creator" color = "EBBD87">
                        <div>Top-40 Producer</div>
                        <div>Producer Brand</div>
                        <div>Vocal Mixing Skills</div>
                        <div>Industry Level Up</div>
                    </GoalSet>
                    <GoalSet title = "Financial Freedom" color = "C0EFAF">
                        <div>Max Streams of Income</div>
                        <div>Invest</div>
                        <div>Live Below Means</div>
                        <div>Scholarships</div>
                    </GoalSet>
                    <GoalSet title = "Personal Goals" color = "d1a9d4">
                        <div>Good Sleep</div>
                        <div>Personal Fitness</div>
                        <div>God</div>
                        <div>Miina</div>
                        <div>Model Form</div>
                    </GoalSet>
                </div>
            </div>
        )
    }
}

