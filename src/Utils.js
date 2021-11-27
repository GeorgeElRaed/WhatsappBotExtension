function simulateMouseEvents(element, eventName) {
    var mouseEvent = document.createEvent('MouseEvents');
    mouseEvent.initEvent(eventName, true, true);
    element.dispatchEvent(mouseEvent);
}

function mouseDown(el) {
    simulateMouseEvents(el, 'mousedown')
}

function eventFire(el, type) {
    var MyEvent = document.createEvent("MouseEvents");
    MyEvent.initMouseEvent(type, true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    el.dispatchEvent(MyEvent);
};

const BOT_REQUEST_PREFIX = '!';
const BOT_RESPONSE_PREFIX = '*BOT*🤖:\n';

function createBotResponse(text) {
    return `${BOT_RESPONSE_PREFIX}${text}`;
}

export {
    simulateMouseEvents, mouseDown, eventFire, BOT_REQUEST_PREFIX,
    BOT_RESPONSE_PREFIX, createBotResponse
}