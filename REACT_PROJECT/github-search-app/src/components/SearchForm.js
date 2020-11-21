import React, { Component } from 'react'

export default class SearchForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',

        };

    }
    handleChange = event => {
        const { value,name } = event.target;
        console.log(value,name );
        this.setState({
            [name]: value
        });
    }

    handleForm = event => {
        event.preventDefault();
        // let username = this.refs.username.value
        let username = this.state.username;
        // const { value } = event.target
        console.log("username", username);
        this.props.fetchSearch(username);
    }


    render() {
        return (
            <div className="search-bar">
                <form
                    className="input-group"
                    onSubmit={this.handleForm}>
                    <input
                        onChange={this.handleChange}
                        type="search"
                        ref="username"
                        name='username'
                        placeholder="Type Username here"
                        className="form-control" />
                    <span className="input-group-btn">
                        <button type="submit"
                            className="btn btn-warning">Submit</button>
                    </span>
                </form>
            </div>
        );
    }


}
