import {Card} from "@/models/Card";

export interface CardInstance {
    card?: Card,
    user?: any,
    isBuyable?: Boolean,
    id?: number
}