import NavBar from "@/components/Navbar";
import MarketService from "@/services/MarketService";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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




    return(
        <>
            <NavBar></NavBar>

            <div>Marketplace</div>
        </>
    )
}

export default Marketplace;