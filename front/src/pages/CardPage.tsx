import InventoryTable from "@/components/Table";

import {useEffect, useState} from "react";
import {fetchCards} from "../services/CardService.ts";
import {Card} from "@/models/Card";
import CardDetails from "@/components/cardDetails.tsx";
import {username, userCash} from "@/context/jotai.ts";
import { useAtom } from "jotai";
import Navbar from "@/components/Navbar.tsx";
import '../styles/cardPage.css';

const CardPage = () => {
    const [cards, setCards] = useState<Card[]>([{}]);
    const [cardToDisplay, setCardToDisplay] = useState<Card>({});
    const [usernameFromContext, setUsername] = useAtom(username);
    const [usercashFromContext, setUsercash] = useAtom(userCash);

    function getCards(){
        return fetchCards();
    }

    useEffect(() => {
        console.log(usernameFromContext);

        const getAllCards = async () => {
            let data = await getCards();
            setCards(data);
        }

        getAllCards();
    }, []);

    return(
        <>
            <Navbar username={usernameFromContext} cash={usercashFromContext}/>
            <div className=" w-screen bg-slate-700 grid grid-cols-3 gap-4">
                <div className="table-inventory-container">
                    <InventoryTable cards={cards} setCardDetails={setCardToDisplay} />
                </div>
                <div className="card-details-container col-span-1 bg-blue-500 h-full px-2 align-center flex justify-center items-center">
                    {cardToDisplay ?
                        <CardDetails
                            country={cardToDisplay.nation  || ""}
                            nameCard={cardToDisplay.name || ""}
                            height={cardToDisplay.height || 0}
                            weight={cardToDisplay.weight || 0}
                            pace={cardToDisplay.pace || 0}
                            rate={cardToDisplay.rating || 0}
                            proprio={'You'}
                            id={cardToDisplay.cardId || 0}
                            buyable={false}
                            onClickOnBuy={() => console.log("")}/>
                        :
                        <p className="more-details">Click on a row to get more details on your card</p>
                    }
                </div>
            </div>
        </>
    )
}

export default CardPage;