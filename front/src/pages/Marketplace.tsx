import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import ModalDialog from "@/components/MarketPlaceDialog";
import MarketService from "@/services/MarketService";
import UserService from "@/services/UserService";
import MarketPlaceAlert from "@/components/MarketPlaceAlert";
import CardInstanceContainer from "@/components/CardInstanceContainer";
import {useAtom} from "jotai";
import {userCash, username} from "@/context/jotai.ts";

const Marketplace = () => {
    const [usernameFromContext, setUsername] = useAtom(username);
    const [usercashFromContext, setUsercash] = useAtom(userCash);
    const [cardInstanceBuyable, setCardInstanceBuyable] = useState([]);
    const [displayDialog, setDisplayDialog] = useState({
        display: false,
        price: 0,
        solde: 1000,
        total: -1,
        cardInstanceId: 1
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

    const buyCardInstanceBuyable = async (id: number) => {

        let success;
        try{
            await MarketService.buyCardInstanceBuyable(id);
            success = true;
        }catch (e) {
            success = false;
        }
        console.log('achat de carte avec id', id);

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

        };
        getData();
    }, []);

    return (
        <>
            <Navbar username={usernameFromContext} cash={usercashFromContext}/>
            <MarketPlaceAlert alertProps={alertProps}></MarketPlaceAlert>
            <CardInstanceContainer cardInstanceBuyable={cardInstanceBuyable} dialogToBuy={dialogToBuy} />
            <ModalDialog displayDialog={displayDialog} setDisplayDialog={setDisplayDialog} buyCardInstanceBuyable={buyCardInstanceBuyable} />
        </>
    );
};

export default Marketplace;
