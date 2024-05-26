import {useEffect, useState} from "react";
import Navbar from "@/components/Navbar";
import CardContainer from "@/components/CardContainer";
import {useAtom} from "jotai";
import {userCash, username} from "@/context/jotai.ts";
import CardService from "@/services/CardService.ts";
import UserService from "@/services/UserService.ts";
import LoadingSpinner from "@/components/LoadingSpinner";

const Vitrine = () => {
    const [cards, setCards] = useState([]);
    const [usernameFromContext, setUsername] = useAtom(username);
    const [usercashFromContext, setUsercash] = useAtom(userCash);
    const [isLoading,setIsLoading]=useState<boolean>(true)

    useEffect(() => {
        const getData = async () => {
            const data = await CardService.getAll();
            setCards(data)
        };
        getData().then(()=>
            setIsLoading(false));
    }, []);

    return (
        <>
                    {isLoading && <div className="w-screen h-screen flex self-center justify-center"><LoadingSpinner /> </div>}

                    {!isLoading && <>  
                     <CardContainer cards={cards}/> 
                     </>}
        </>
    );
};

export default Vitrine;
