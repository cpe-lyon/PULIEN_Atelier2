import { useNavigate } from "react-router-dom";
import InventoryTable from "@/components/Table";
import CardPreview from "@/components/CardPreview";

import {useEffect, useState} from "react";
import {fetchCards, getCardDetails} from "../services/CardService.ts";
import {Card} from "@/models/Card";

const CardPage = () => {
    const navigate = useNavigate();
    const [cards, setCards] = useState<Card[]>([{}]);
    const [cardToDisplay, setCardToDisplay] = useState<Card>({});

    function getCards(){
        return fetchCards();
    }

    useEffect(() => {
        const getAllCards = async () => {
            let data = await getCards();
            setCards(data);
        }

        getAllCards();
    }, []);

    async function onClickOnCard(id: number) {
        // TODO à voir si c'est pas mieux d'utiliser le state cards plutot
        let card: Card | undefined = await getCardDetails(id);
        if (card) {
            setCardToDisplay(card);
        }
    }

    return(
        <div className=" w-screen bg-slate-700 grid grid-cols-3 gap-4">
            {
                cards.map((card: Card) => <div>{card.name}</div>)
            }
            <div className="col-span-2 bg-green-500 h-full px-2">
                <InventoryTable />
            </div>
            <div className="col-span-1 bg-blue-500 h-full px-2 ">
                <CardPreview />
            </div>
        </div>
    )
}

export default CardPage;