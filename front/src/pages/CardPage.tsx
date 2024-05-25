import Navbar from "@/components/Navbar";
import {useEffect, useState} from "react";
import UserService from "@/services/UserService";
import InventoryTable from "@/components/Table";
import CardPreview from "@/components/CardPreview";
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
        <div className=" w-screen bg-slate-700 grid grid-cols-3 gap-4">
            <div className="col-span-2 bg-green-500 h-full px-2">
                <InventoryTable />
            </div>
            <div className="col-span-1 bg-blue-500 h-full px-2 ">
                <CardPreview />
            </div>
        </div>   
        <>
            <Navbar username={username} cash={usercash}></Navbar>
            <div>CardPage</div>
        </>
    )
}

export default CardPage;