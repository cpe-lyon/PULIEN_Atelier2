import React from 'react';
import CardDetails from "@/components/cardDetails";

const CardContainer = ({ cardInstanceBuyable, dialogToBuy }) => (
    <div className="card-container mx-10 mx-auto">
        {cardInstanceBuyable.map(ci => (
            <CardDetails
                key={ci.id}
                country={ci.card.nation}
                nameCard={ci.card.name}
                height={ci.card.height}
                weight={ci.card.weight}
                pace={ci.card.pace}
                rate={ci.card.rating}
                proprio={ci.user.login}
                cardInstanceId={ci.id}
                buyable={true}
                onClickOnBuy={() => dialogToBuy(ci.id)}
            />
        ))}
    </div>
);

export default CardContainer;