import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import CardContainer from "@/components/CardContainer";
import ModalDialog from "@/components/MarketPlaceDialog";
import MarketService from "@/services/MarketService";
import UserService from "@/services/UserService";
import MarketPlaceAlert from "@/components/MarketPlaceAlert";

const Marketplace = () => {
    const navigate = useNavigate();
    const [cardInstanceBuyable, setCardInstanceBuyable] = useState([]);
    const [username, setUsername] = useState('');
    const [usercash, setUserCash] = useState(0);
    const [displayDialog, setDisplayDialog] = useState({
        display: false,
        price: 0,
        solde: 1000,
        total: -1
    });
    const [alertProps, setAlertProps] = useState({
        display: false,
        playerName : '',
        owner : '',
        success: false
    })

    const getCardInstanceBuyable = async () => {
        const response = await MarketService.getCardInstanceBuyable();
        return response.content;
    };

    const buyCardInstanceBuyable = async (id) => {

        let success;
        try{
            await MarketService.buyCardInstanceBuyable(id);
            success = true;
        }catch (e) {
            success = false;
        }
        const cardInstance = cardInstanceBuyable.find(i => i.id === id);
        let alertProps = {
            display: true,
            playerName : cardInstance.card.name,
            owner : cardInstance.user.login,
            success: success
        }

        setAlertProps(alertProps)
        setDisplayDialog({
            display: false,
            price: 0,
            solde: 1000,
            total: -1
        })

        const data = await getCardInstanceBuyable();
        setCardInstanceBuyable(data);

        const userData = await UserService.getUser();
        setUsername(userData.login)
        setUserCash(userData.cash)
    };

    const dialogToBuy = async (id) => {
        const cardInstance = cardInstanceBuyable.find(i => i.id === id);
        if (!cardInstance) return;

        const price = cardInstance.card.price;
        const solde = await UserService.getUserCash();
        const total = solde - price;

        setDisplayDialog({
            display: true,
            price: price,
            solde: solde,
            total: total,
            cardInstanceId: id
        });
    };

    useEffect(() => {
        const getData = async () => {
            const data = await getCardInstanceBuyable();
            setCardInstanceBuyable(data);

            const userData = await UserService.getUser();
            setUsername(userData.login)
            setUserCash(userData.cash)
        };
        getData();
    }, []);

    return (
        <>
            <Navbar username={username} cash={usercash}/>
            <MarketPlaceAlert alertProps={alertProps}></MarketPlaceAlert>
            <CardContainer cardInstanceBuyable={cardInstanceBuyable} dialogToBuy={dialogToBuy} />
            <ModalDialog displayDialog={displayDialog} setDisplayDialog={setDisplayDialog} buyCardInstanceBuyable={buyCardInstanceBuyable} />
        </>
    );
};

export default Marketplace;
