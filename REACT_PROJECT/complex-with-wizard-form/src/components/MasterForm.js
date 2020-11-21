import React, { Component } from 'react'
import Steps1 from './Steps1'
import Steps2 from './Steps2'
import Steps3 from './Steps3'

export default class MasterForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentStep: 1,
            email: '',
            username: '',
            password: '',
        }
    }
    handleChange = event => {
        const { name, value } = event.target
        console.log("name", name);
        console.log("value", value);
        this.setState({
            [name]: value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        const { email, username, password } = this.state
        alert(`Your registration detail: \n 
               Email: ${email} \n 
               Username: ${username} \n
               Password: ${password}`)
    }
    _next = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep >= 2 ? 3 : currentStep + 1
        this.setState({
            currentStep: currentStep
        })
    }

    _prev = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep <= 1 ? 1 : currentStep - 1
        this.setState({
            currentStep: currentStep
        })
    }
    previousButton() {
        let currentStep = this.state.currentStep;
        if (currentStep !== 1) {
            return (
                <button
                    className="btn btn-secondary"
                    type="button" onClick={this._prev}>
                    Previous
                </button>
            )
        }
        return null;
    }
    nextButton() {
        let currentStep = this.state.currentStep;
        if (currentStep < 3) {
            return (
                <button
                    className="btn btn-primary float-right"
                    type="button" onClick={this._next}>
                    Next
                </button>
            )
        }
        return null;
    }
    render() {
        return (
            <div>
                <React.Fragment>
                    <h1>A Wizard Form!</h1>
                    <p>Step {this.state.currentStep} </p>
                    <form onSubmit={this.handleSubmit}>

                        <Steps1
                            currentStep={this.state.currentStep}
                            handleChange={this.handleChange}
                            email={this.state.email}
                        />

                        <Steps2
                            currentStep={this.state.currentStep}
                            handleChange={this.handleChange}
                            username={this.state.username}
                        />
                        <Steps3
                            currentStep={this.state.currentStep}
                            handleChange={this.handleChange}
                            password={this.state.password}
                        />

                        {this.previousButton()}
                        {this.nextButton()}
                    </form>
                </React.Fragment>
            </div>
        )
    }
}
