import React from 'react';
import uniqueId from '../../util/unique_id';

export default class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: uniqueId(),
            title: "",
            body: "",
            done: false
        }

        this.updateTitle = this.updateTitle.bind(this)
        this.updateBody = this.updateBody.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    updateTitle(e) {
        this.setState({ title: e.target.value })
    }

    updateBody(e) {
        this.setState({ body: e.target.value })
    }

    handleSubmit(e) {
        // debugger
        e.preventDefault()
        this.props.receiveTodo(this.state)
        this.setState({
            id: Math.floor(Math.random() * 1000000),
            title: '',
            body: ''
        })
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Title
                    <input type="text" 
                    value={this.state.title}
                    onChange={this.updateTitle}
                    />
                </label>
                <br />
                <label>Body
                    <input type="text" 
                    value={this.state.body}
                    onChange={this.updateBody}
                    />
                </label>
                <br />

                <input type="submit" value="Add Todo"/>
            </form>
        )
    }
}