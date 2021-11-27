import { createBotResponse } from "../Utils.js";

export default function Slap(command, args, text, el) {
    if (!args)
        return createBotResponse("Slap requires an argument!");

    return createBotResponse("Slapping " + args[0]);
}