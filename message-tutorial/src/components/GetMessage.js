
import React from 'react';
import MessageContext from "../contexts/message.context";
import messageService from '../services/message.service';
import {connect} from 'react-redux';

class GetMessage extends React.Component {
    // static contextType = MessageContext;

    // state = {
    //     message: ''
    // }
    //
    // componentDidMount() {
    //     messageService.message.subscribe((msgFromBrother) => {
    //         this.setState({
    //             message: msgFromBrother
    //         })
    //     })
    // }

    render() {
        return (
            <h1>
                {this.props.msgFromState}
            </h1>
        )
    }
}

// connect(configuration)(GetMessage)

export default connect(
    // what do you want to grab from the state?
    function(state) {
        return {
            msgFromState : state.messaging.msg
        }
    }
)(GetMessage);