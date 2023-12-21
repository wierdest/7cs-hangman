import { Player } from "./player.model";

export interface Session {
    createdDate: Date,
    lastAccessDate: Date,
    players: Player[],
}