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
            <div>You are already connected!</div>
            <Button onClick={logout}>Logout</Button>
            <Button asChild>
                <Link to="/card">Acceuil</Link>
            </Button>
        </>
    );
};

export default AlreadyConnected;
