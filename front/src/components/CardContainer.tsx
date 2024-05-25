import React from 'react';
import CardDetails from "@/components/cardDetails";

const CardContainer = ({cards}) => (
    <div className="card-container mx-10 mx-auto">
        {cards.map(ci => (
            <CardDetails
                country={ci.nation}
                nameCard={ci.name}
                height={ci.height}
                weight={ci.weight}
                pace={ci.pace}
                rate={ci.rating}
            />
        ))}
    </div>
);

export default CardContainer;