import { BOT_REQUEST_PREFIX } from "./Utils.js";

import Handlers from "./requests/Handlers.js";

export default function HandleRequest(el) {
    var text = el?.querySelector('.copyable-text')?.firstElementChild?.firstElementChild?.innerText;

    if (!text) return;

    if (text.length <= BOT_REQUEST_PREFIX.length) return;

    if (!text.startsWith(BOT_REQUEST_PREFIX)) return;

    var parts = text.split(' ');
    var command = parts[0].slice(1)
    var args = parts.length > 1 ? parts.slice(1) : undefined;

    const handler = Handlers[command.toLowerCase()];

    if (!handler) return

    return handler(command, args, text, el);
}