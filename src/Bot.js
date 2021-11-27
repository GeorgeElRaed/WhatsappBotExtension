import { mouseDown, eventFire } from './Utils.js'
import HandleRequest from './RequestHandler.js';

export default class Bot {
    constructor() {

    }

    startBot() {
        this.openChat('Mom');
        setTimeout((_ => this.initChatListener()).bind(this), 2000);
    }

    openChat(chatName) {
        const chat = document.querySelector(`[title="${chatName}"]`);
        mouseDown(chat);
    }

    initChatListener() {
        const chatList = document.querySelector('[aria-label^="Message list"]');

        let chatObserver = new MutationObserver(mutations => {
            mutations.forEach((mutation) => {
                if (!mutation.addedNodes) return
                mutation.addedNodes.forEach(el => {
                    if (el.classList.contains('message-in') || el.classList.contains('message-out')) {
                        this.sendResponse(HandleRequest(el));
                    }
                })
            })
        });

        chatObserver.observe(chatList, {
            childList: true,
            subtree: true,
            attributes: false,
            characterData: false
        })

    }


    sendResponse(message) {
        if (!message) return;

        this.messageBox = document.querySelectorAll("[contenteditable='true']")[1];

        var event = document.createEvent("UIEvents");
        this.messageBox.innerHTML = message;
        event.initUIEvent("input", true, true, window, 1);
        this.messageBox.dispatchEvent(event);

        eventFire(document.querySelector('span[data-icon="send"]'), 'click');
    }

}