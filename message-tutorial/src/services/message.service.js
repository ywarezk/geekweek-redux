import {Subject} from 'rxjs';

class MessageService {
    // message => publish subscribe

    constructor() {
        // message.next(newValue)
        // message.subscribe(() => ...)
        this.message = new Subject();
    }
}

export default new MessageService();