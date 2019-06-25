
import React, {createRef} from 'react';
import MessageContext from "../contexts/message.context";
import messageService from '../services/message.service';
import {connect} from 'react-redux';
import {setMessage} from "../redux/actions/messaging.actions";

class SendMessage extends React.Component {
    static contextType = MessageContext;

    constructor(props) {
        super(props);
        this.messageInput = createRef();
    }

    handleSubmit = (event) => {
        const message = this.messageInput.current.value;
        console.log(message);
        // this.context.setMessage(message);
        event.preventDefault();

        this.props.setMessage(message)

        // messageService.message.next(message);

        // store.dispatch(setMessage(message));

        //
        // function(message) {
        //     store.dispatch(setMessage(message))
        // }
        //
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>Write Message</label>
                    <input
                        ref={this.messageInput}
                        type="text"
                        name="message"
                        className="form-control" />
                </div>
                <div className="form-group">
                    <button
                        className="btn btn-primary"
                        type="submit">Submit</button>
                </div>
            </form>
        )
    }
}

export default connect(
    null,
    {
        // setMessageWithDispatch: setMessage
        // setMessage: setMessage
        setMessage
    }
)(SendMessage);