import React from 'react'

function Steps3(props) {
    if (props.currentStep !== 3) {
        return null
    }
    return (
        <div className="form-group">
            <label htmlFor="password"> Username</label>
            <input
                className="form-control"
                id="password"
                name="password"
                type="text"
                placeholder="Enter password"
                value={props.password} // props from parent
                onChange={props.handleChange} // props from parent
            />
        </div>
    )
}

export default Steps3
