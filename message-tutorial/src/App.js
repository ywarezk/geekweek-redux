import React from 'react';
import './App.css';
import SendMessage from "./components/SendMessage";
import GetMessage from "./components/GetMessage";
import MessageContext from './contexts/message.context';
import {Provider} from 'react-redux';
import store from "./redux/store";
import TodoList from './components/TodoList';
import Loader from './components/Loader';



class App extends React.Component {
    state = {
        contextMessage: 'hello from context'
    }

    changeContext = (newValueForProvider) => {
        this.setState({
            contextMessage: newValueForProvider
        })
    }

    render() {
        return (
            <Provider store={store}>
                <div className="App mt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="text-center">
                                    Component communication
                                </h1>
                            </div>

                            <MessageContext.Provider value={
                                {
                                    message: this.state.contextMessage,
                                    setMessage: this.changeContext
                                }

                            }>
                                <div className="col-6">
                                    <SendMessage />
                                </div>

                                <div className="col-6">
                                    <GetMessage />
                                </div>

                                <div className="col-6">
                                    <Loader />
                                    <TodoList />
                                </div>
                            </MessageContext.Provider>


                        </div>
                    </div>
                </div>
            </Provider>

        )
    }
}

export default App;
