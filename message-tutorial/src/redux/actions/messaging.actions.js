export const SET_MESSAGE = '[messaging] SET_MESSAGE';

// action creator
export function setMessage(newMessage) {
    return {
        type: SET_MESSAGE,
        payload: newMessage
    }
}