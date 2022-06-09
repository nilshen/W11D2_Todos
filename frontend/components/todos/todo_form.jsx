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
    }

    render () {
        return (
            <form>
                <label>Title
                    <input type="text" value={this.state.title}/>
                </label>
                <br />
                <label>Body
                    <input type="text" value={this.state.body}/>
                </label>
                <br />
            </form>
        )
    }
}