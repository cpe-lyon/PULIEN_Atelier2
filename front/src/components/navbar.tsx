import { Link, useNavigate } from "react-router-dom";
import { NavigationMenu,NavigationMenuList, NavigationMenuItem,} from "./ui/navigation-menu"
import authProvider from "@/services/AuthProvider";
import { Button } from "./ui/button";
import UserService from "@/services/UserService";
import { useEffect, useState } from "react";

const NavBar = () => {
    const [cash, setCash] = useState(0);
    const navigate = useNavigate();

    function logout() {
        authProvider.logout();
        navigate("/login");
    }

    function getCash(){
        return UserService.getUserCash();;
    }

    useEffect(() => {
        const getCashCach = async () => {
            let data = await getCash();
            console.log('zvhdzjcvd')
            setCash(data);
        }
        getCashCach()
    }, []);
    

    return (
        <>
            <div className="flex bg-gray-500 text-white" >
                {cash}
                <NavigationMenu className="ihz">
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <Link to="/card">Cards</Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link to="/marketplace">Market</Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link to="/vitrine">Vitrine</Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                    <Button onClick={logout}>Logout</Button>
                </NavigationMenu>
            </div>


        </>
    )
}

export default NavBar;