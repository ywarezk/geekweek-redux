import React from 'react';
import {connect} from 'react-redux';

function Loader({isLoading}) {
    return (
        <div>
            {
                isLoading && (
                    <h1>
                        Loading...
                    </h1>
                )
            }
        </div>

    )
}

export default connect(
    state => ({
        isLoading: state.todo.isLoading
    })
)(Loader)