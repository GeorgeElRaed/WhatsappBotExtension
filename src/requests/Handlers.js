import { createBotResponse } from "../Utils.js";
import Echo from "./Echo.js";
import Greet from "./Greet.js";
import Ping from "./Ping.js";
import Slap from "./Slap.js";

const Handlers = {
    'hello': Greet,
    'hey': Greet,
    'hi': Greet,
    'ping': Ping,
    'echo': Echo,
    'slap': Slap,
    'info': Info
}

function Info() {
    return createBotResponse(`Command format: ![command]\nExample: !Hello\nAvailable commands: ${Object.keys(Handlers).join(", ")}`)
}

export default Handlers;