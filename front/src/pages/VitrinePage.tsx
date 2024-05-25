import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import CardContainer from "@/components/CardContainer";
import MarketService from "@/services/MarketService";
import UserService from "@/services/UserService";
import MarketPlaceAlert from "@/components/MarketPlaceAlert";
import CardService from "@/services/CardService";

const Vitrine = () => {
    const navigate = useNavigate();
    const [cards, setCards] = useState([]);
    const [username, setUsername] = useState('');
    const [usercash, setUserCash] = useState(0);

    useEffect(() => {
        const getData = async () => {
            const data = await CardService.getAll();
            setCards(data)

            const userData = await UserService.getUser();
            setUsername(userData.login)
            setUserCash(userData.cash)
        };
        getData();
    }, []);

    return (
        <>
            <Navbar username={username} cash={usercash}/>
            <CardContainer cards={cards}/>
        </>
    );
};

export default Vitrine;
