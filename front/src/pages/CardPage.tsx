import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import InventoryTable from "@/components/Table";
import CardPreview from "@/components/CardPreview";
const CardPage = () =>{
    const navigate = useNavigate();

    function logout() {
        localStorage.setItem('auth', '');
        navigate("/login");
    }

    return(
        <div className=" w-screen bg-slate-700 grid grid-cols-3 gap-4">
            <div className="col-span-2 bg-green-500 h-full px-2">
                <InventoryTable />
            </div>
            <div className="col-span-1 bg-blue-500 h-full px-2 ">
                <CardPreview />
            </div>
        </div>   
    )
}

export default CardPage;