import Navbar from "@/components/Navbar";
import {useEffect, useState} from "react";
import UserService from "@/services/UserService";
import {useNavigate} from "react-router-dom";
import InventoryTable from "@/components/Table.tsx";
import CardPreview from "@/components/CardPreview.tsx";

const CardPage = () =>{
    const [username, setUsername] = useState('');
    const [usercash, setUserCash] = useState(0);
    const navigate = useNavigate();
    /*const [cards, setCards] = useState({});

    function getCards(){
        return fetchCards();
    }

    useEffect(() => {
        const getAllCards = async () => {
            let data = await getCards();
            setCards(data);
        }

        getAllCards().then(response => {
            console.log(cards);
        })
    }, []);*/

    function logout() {
        localStorage.setItem('auth', '');
        navigate("/login");
    }

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
            <div className=" w-screen bg-slate-700 grid grid-cols-3 gap-4">
                <div className="col-span-2 bg-green-500 h-full px-2">
                    <InventoryTable />
                </div>
                <div className="col-span-1 bg-blue-500 h-full px-2 ">
                    <CardPreview />
                </div>
            </div>
        </>
    )
}

export default CardPage;