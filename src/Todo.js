import React, { Component } from 'react';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            text: this.props.intlText
        };

        // ***
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.beginEdit = this.beginEdit.bind(this);
        this.cancelEdit = this.cancelEdit.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleClick(evt){
       this.props.deleteTodo(this.props.uuid);
    }

    handleChange(evt){
        this.setState({[evt.target.name]: evt.target.value});
    }

    onSubmit(evt){
        evt.preventDefault();
        this.props.updateTodo(this.props.uuid, this.state.text);
        this.setState({editMode: false});
    }

    beginEdit(evt){
        this.setState({editMode: true});
    }

    cancelEdit(evt){
        this.setState({editMode: false, text: this.props.intlText});
    }

    render() {
        return <div className="Todo">
                {
                    this.state.editMode &&
                    <form onSubmit={this.onSubmit}>
                        <input type="text" id="text" name="text" value={this.state.text} onChange={this.handleChange}/>
                        <button onClick={this.cancelEdit} type="button">Cancel</button>
                        <button onClick={this.onSubmit}>Finish</button>
                    </form>
                }

                {
                    !this.state.editMode && 
                        <div>
                            <span>{this.state.text}</span>
                            <span onClick={this.beginEdit}>Edit</span>
                            <span onClick={this.handleClick}>x</span>
                        </div>
                }
            </div>;
    }
}

export default Todo;
