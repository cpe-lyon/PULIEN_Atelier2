import {Card} from "@/models/Card";
import {CardInstance} from "@/models/CardInstance";

export interface TableInventoryProperty {
    cards: CardInstance[],
    setCardDetails?: any
}