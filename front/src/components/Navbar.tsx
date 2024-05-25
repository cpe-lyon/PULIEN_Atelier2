import { Link, useNavigate } from "react-router-dom";
import {NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink,} from "./ui/navigation-menu"
import authProvider from "@/services/AuthProvider";
import {Avatar, AvatarImage} from "@/components/ui/avatar";
import {useState} from "react";

const Navbar = (({username,cash}) => {
    const navigate = useNavigate();

    function logout() {
        authProvider.logout();
        window.location.reload(false);
    }

    return (
        <>
            <NavigationMenu className="bg-gray-700 text-white h-10 mx-auto max-w-full flex justify-between px-3">
                <NavigationMenuLink className="flex">
                    <a href="https://media.licdn.com/dms/image/D4E03AQHjwroQRk_WPw/profile-displayphoto-shrink_100_100/0/1705959403635?e=1721865600&v=beta&t=C7SW-VSc2cqGH3mpYKeVS2_XiSxalnMpBjEvy2yjqME" target="_blank" rel="noopener noreferrer">
                        <Avatar className="h-7 w-7">
                            <AvatarImage src="https://media.licdn.com/dms/image/D4E03AQHjwroQRk_WPw/profile-displayphoto-shrink_100_100/0/1705959403635?e=1721865600&v=beta&t=C7SW-VSc2cqGH3mpYKeVS2_XiSxalnMpBjEvy2yjqME" />
                        </Avatar>
                    </a>
                    <p className="ml-2">
                        {username} : {cash} $
                    </p>
                </NavigationMenuLink>
                <NavigationMenuList className="space-x-12">
                    <NavigationMenuItem className={"navLinkHover"}>
                        <Link to="/card">Cards</Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem className={"navLinkHover"}>
                        <Link to="/marketplace">Market</Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem className={"navLinkHover"}>
                        <Link to="/vitrine">Vitrine</Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
                <NavigationMenuLink className={"navLinkHover"}>
                    <Link onClick={logout}>Logout</Link>
                </NavigationMenuLink>
            </NavigationMenu>
        </>
    )
});

export default Navbar;