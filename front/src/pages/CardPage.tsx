import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const CardPage = () =>{
    const navigate = useNavigate();

    function logout() {
        localStorage.setItem('auth', '');
        navigate("/login");
    }

    return(
        <>
            <Button onClick={logout}>Logout</Button>
            <div>CardPage</div>
        </>
    )
}

export default CardPage;