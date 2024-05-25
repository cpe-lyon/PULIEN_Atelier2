import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

const AlreadyConnected = () => {
    const navigate = useNavigate();

    function logout() {
        localStorage.setItem('auth', '');
        navigate("/card");
    }

    return (
        <>
            <div className={"w-1/5 mx-auto mt-32 flex justify-between "}>
                <div className={"pt-2"}>Vous êtes déjà connecté!</div>
                <Button onClick={logout}>Déconnexion</Button>
                <Button asChild>
                    <Link to="/card">Acceuil</Link>
                </Button>
            </div>
        </>
    );
};

export default AlreadyConnected;
