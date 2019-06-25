/**
 * I want to create a context that will be shared
 * between SendMessage, GetMessage
 * the context will contain a message
 * SendMessage can change it
 * GetMessage can read it
 */

import {createContext} from 'react';

const MessageContext = createContext('hello from send message');
export default MessageContext;