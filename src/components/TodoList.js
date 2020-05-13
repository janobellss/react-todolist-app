import React from 'react';

class TodoList extends React.Component {
    render() {

        const completedStyle = {
            textDecoration: 'line-through',
            fontStyle: 'italic',
            color: '#cdcdcd'
        }

        return(
            <div>
                <input 
                    type='checkbox' 
                    checked={this.props.todo.completed} onChange={() => {
                        //console.log("ON CHANGE!");
                        this.props.hChange(this.props.todo.id);
                    }}
                ></input>
                <p style={this.props.todo.completed ? completedStyle : null}>{this.props.todo.item}</p>
            </div>
        );
    }
}

export default TodoList;