import NavBar from "@/components/Navbar";
import MarketService from "@/services/MarketService";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardDetails  from "@/components/cardDetails";

const Marketplace = () =>{
    const navigate = useNavigate();
    const [cardInstanceBuyable, setCardInstanceBuyable] = useState([]);

    function getCardInstanceBuyable(){
        return MarketService.getCardInstanceBuyable();
    }

    function buyCardInstanceBuyable(id){
        return MarketService.buyCardInstanceBuyable(id).then(() => navigate("/marketplace"));
    }

    useEffect(() => {
        const getData = async () => {
            let data = await getCardInstanceBuyable();
            console.log(data.content)
            setCardInstanceBuyable(data.content);
        }
        getData()
    }, []);


    return (
        <>
            <NavBar />
            <div className="card-container">
                {cardInstanceBuyable.map(ci => (
                    <CardDetails
                        key={ci.card.id}
                        country={ci.card.nation}
                        nameCard={ci.card.name}
                        height={ci.card.height}
                        weight={ci.card.weight}
                        pace={ci.card.pace}
                        rate={ci.card.rating}
                        proprio={ci.user.login}
                    />
                ))}
            </div>
        </>
    );
}

export default Marketplace;