import {TableInventoryProperty} from "@/models/TableInventoryProperty.ts";
import MarketService from "@/services/MarketService.ts";
import ConfirmModal from "@/components/ConfirmModal.tsx";
import {useState} from "react";

const TableV2 = (properties: TableInventoryProperty) => {
    const [wantsToSell, setWantsToSell] = useState(false);
    const [cardIdToSell, setCardIdToSell] = useState(0);

    const onCardClick = (id: number = 0, index: number = 0, card?: any) => {

        properties.setCardDetails(properties.cards[index].card);
        console.log("id", id);
        console.log("card", card);
    }

    const sell = (id?: number) => {

        if (!id) {
            alert("Error while selling the card.");
            return;
        }

        setWantsToSell(true);
        setCardIdToSell(id);
    }

    const onConfirm = () => {
        MarketService
            .sellCardInstance(cardIdToSell)
            .then(() => {
                alert("Your card is now to sell");
                setWantsToSell(false);
            });
    }

    const onCancel = () => {
        setWantsToSell(false);
        console.info("cancelled");
    }

    return (
        <div className="container mx-auto p-4">
            <ConfirmModal
                isOpen={wantsToSell}
                title={"Are you sure to sell this card?"}
                message={"You won't be able to rollback"}
                onConfirm={onConfirm}
                onCancel={onCancel}/>
            <table className="min-w-full bg-white rounded-lg border-collapse overflow-hidden shadow-lg">
                <thead>
                <tr className="w-full bg-gray-200 text-gray-700">
                    <th className="px-3 py-2">Card ID</th>
                    <th className="px-3 py-2">Name</th>
                    <th className="px-3 py-2">Image</th>
                    <th className="px-3 py-2">Nation</th>
                    <th className="px-3 py-2">Pace</th>
                    <th className="px-3 py-2">Weight</th>
                    <th className="px-3 py-2">Height</th>
                    <th className="px-3 py-2">Price</th>
                    <th className="px-3 py-2">Rating</th>
                    <th className="px-3 py-2">Sell</th>
                </tr>
                </thead>
                <tbody>
                {properties.cards.map((card, index) => (
                    <tr
                        onClick={() => onCardClick(card.id, index, card)}
                        key={card.card?.cardId}
                        className={`border-t ${index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-300'}`}
                    >
                        <td className="border px-3 py-2">{card.card?.cardId}</td>
                        <td className="border px-3 py-2">{card.card?.name}</td>
                        <td className="border px-3 py-2">
                            <img src="https://media.licdn.com/dms/image/D4E03AQHjwroQRk_WPw/profile-displayphoto-shrink_100_100/0/1705959403635?e=1721865600&v=beta&t=C7SW-VSc2cqGH3mpYKeVS2_XiSxalnMpBjEvy2yjqME" alt={card.card?.name} className="h-10 w-10 object-cover rounded-full" />
                        </td>
                        <td className="border px-3 py-2">{card.card?.nation}</td>
                        <td className="border px-3 py-2">{card.card?.pace}</td>
                        <td className="border px-3 py-2">{card.card?.weight}</td>
                        <td className="border px-3 py-2">{card.card?.height}</td>
                        <td className="border px-3 py-2">{card.card?.price}</td>
                        <td className="border px-3 py-2">{card.card?.rating}</td>
                        <td className="border px-3 py-2">
                            <button className="bg-black text-white px-4 py-2 rounded-md" onClick={() => sell(card.id)}>Sell</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableV2;
