import React from 'react';

export default class TodoListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.todoItem;
    }
    render () {

        return (
            <div>
                <li>{this.props.todoItem.title}</li>
            </div>
        )
    }
}