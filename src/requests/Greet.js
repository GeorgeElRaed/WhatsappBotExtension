import { createBotResponse } from "../Utils.js";

export default function Greet(command, args, text, el) {
    return createBotResponse(responses[Math.floor(Math.random() * responses.length)]);
}

const responses = ['Hey there', 'Hello', 'Hey', 'hi']