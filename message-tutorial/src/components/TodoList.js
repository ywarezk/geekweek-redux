/**
 * I want to grab the todo list from the state
 */

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchTasks} from '../redux/actions/todo.actions';

class TodoList extends React.Component {
    static propTypes = {
        // {title: '', id:.. , description...}
        tasksFromState : PropTypes.array.isRequired,
        fetchTasks : PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.fetchTasks();
    }

    render() {
        return (
            <>
                <h1>Todo list</h1>
                <ul>
                    {
                        this.props.tasksFromState.map((todoTask) => (
                            <li key={todoTask.id}>{todoTask.title}</li>
                        ))
                    }
                </ul>
            </>
        )
    }
}

export default connect(
    function(state) {
        return {
            tasksFromState: state.todo.tasks
        }
    },
    {
        fetchTasks
    }
)(TodoList)