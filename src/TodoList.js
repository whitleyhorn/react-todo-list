import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {todos: []};
        this.addTodo = this.addTodo.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
    }

    addTodo(todo){
        this.setState({todos: [...this.state.todos, todo]});
    }

    updateTodo(uuid, text){
        let newTodos = this.state.todos.map(todo => {
            if(todo.uuid === uuid) {
                return { ... todo, text: text };
            }
            return todo;
        })
        this.setState({todos: newTodos});
    }

    deleteTodo(uuid){
        this.setState({todos: this.state.todos.filter(todo => todo.uuid !== uuid)});
    }

    render() {
        return (
            <div className="TodoList">
                <NewTodoForm addTodo={this.addTodo}/>
                {
                    this.state.todos.map(todo => {
                        return <Todo 
                                    key={todo.uuid} 
                                    uuid={todo.uuid} 
                                    intlText={todo.text} 
                                    updateTodo={this.updateTodo}
                                    deleteTodo={this.deleteTodo}
                            />;
                    })
                }
            </div>
        );
    }
}

export default TodoList;
