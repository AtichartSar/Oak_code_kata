import React, { Component } from 'react'
import countries from './Countries';
import './Auto.css'

export default class AutoCompletedText extends Component {
    constructor(props) {
        super(props)
        this.state = {
            suggestion: [],
            text: ''
        }
    }
    onTextChange = (e) => {
        const { value } = e.target
        let suggestions = []
        if (value.length > 0) {
            // i = case case insensitive
            const regex = new RegExp(`^${value}`, 'i');
            console.log(regex);
            suggestions = countries.sort().filter(v => regex.test(v))
            console.log(suggestions);
        }
        this.setState(() => ({
            suggestions,
            text: value
        }))
    }
    selectedText(value) {
        this.setState(() => ({
            text: value,
            suggestions: [],
        }))
    }
    renderSuggestions = () => {
        let { suggestions } = this.state;
        console.log(suggestions?.length);
        if(suggestions?.length === 0){
            return null;
        }
        return (
            <ul >
                {
                    suggestions?.map((item, index) => (<li key={index} onClick={() => this.selectedText(item)}>{item}</li>))
                }
            </ul>
        );
    }
    render() {
        const { text, suggestions } = this.state;
        return (
            <div id="notebooks">
                <h2>Auto Completed</h2>
                <input id="query" type="text" onChange={this.onTextChange} value={text} />
                {this.renderSuggestions()}
                 <span>Suggestions: {suggestions?.length}</span>
            </div>
        )
    }
}
