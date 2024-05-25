import {useEffect, useState} from "react";
import Navbar from "@/components/Navbar";
import CardContainer from "@/components/CardContainer";
import {useAtom} from "jotai";
import {userCash, username} from "@/context/jotai.ts";
import CardService from "@/services/CardService.ts";
import UserService from "@/services/UserService.ts";

const Vitrine = () => {
    const [cards, setCards] = useState([]);
    const [usernameFromContext, setUsername] = useAtom(username);
    const [usercashFromContext, setUsercash] = useAtom(userCash);

    useEffect(() => {
        const getData = async () => {
            const data = await CardService.getAll();
            setCards(data)
        };
        getData();
    }, []);

    return (
        <>
            <Navbar username={usernameFromContext} cash={usercashFromContext}/>
            <CardContainer cards={cards}/>
        </>
    );
};

export default Vitrine;
