import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';

class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {text: '', uuid: uuid()};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(evt){
        evt.preventDefault();
        this.props.addTodo({...this.state});         
        this.setState({text: '', uuid: uuid()});
    }

    handleChange(evt){
        this.setState({[evt.target.name]: evt.target.value});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="text">New Todo</label>
                <input type="text" id="text" name="text" value={this.state.text} onChange={this.handleChange} />
                <button disabled={this.state.text.length === 0}>Add Todo</button>
            </form>
        );
    }
}

export default NewTodoForm;
