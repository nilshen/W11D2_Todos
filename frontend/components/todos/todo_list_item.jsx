import React from 'react';

export default class TodoListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.todoItem;
    }
    render () {

        return (
            <div>
                <ul>
                <li>{this.props.todoItem.title}

                    <br/>

                    {this.props.todoItem.body}
                </li>
                <br />
                    </ul>
            </div>
        )
    }
}