import { createBotResponse } from "../Utils.js";

export default function Ping(command, args, text, el) {
    return createBotResponse("Pong");
}