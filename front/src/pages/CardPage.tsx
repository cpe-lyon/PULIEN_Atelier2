import Navbar from "@/components/Navbar";
import {useEffect, useState} from "react";
import UserService from "@/services/UserService";

const CardPage = () =>{
    const [username, setUsername] = useState('');
    const [usercash, setUserCash] = useState(0);

    useEffect(() => {
        const getData = async () => {
            UserService.getUser().then(userData =>{
                setUsername(userData.login)
                setUserCash(userData.cash)
            } )

        };
        getData();
    }, []);
    return(
        <>
            <Navbar username={username} cash={usercash}></Navbar>
            <div>CardPage</div>
        </>
    )
}

export default CardPage;