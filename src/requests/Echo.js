import { createBotResponse } from "../Utils.js";

export default function Echo(command, args, text, el) {
    if (!args)
        return createBotResponse("Echo requires arguments!");

    return createBotResponse(args?.join(' '));
}