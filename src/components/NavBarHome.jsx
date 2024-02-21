// import React from 'react'
import React from "react";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Button, } from "@nextui-org/react";
import collageLogo from "../assets/collegeLogo.png";
import '../assets/fonts.css'
import{Link} from 'react-router-dom'

function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        "الملف الشخصي",
        "الاقسام",
        "الصفحة الرئيسية",
        "تواصل",
        // "Help & Feedback",
        // "Log ",
    ];

    return (
        <Navbar
            isBordered
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            className="h-20 border-b-2 border-orange-500 w-4/5 m-auto"
        >
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>

            <NavbarContent className="sm:hidden pr-3" justify="center">
                <NavbarBrand>
                    <img className="w-20  " src={collageLogo} alt="" />
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4 " justify="center">
                <NavbarBrand>
                    <img className="w-20  " src={collageLogo} alt="" />
                </NavbarBrand>



                <NavbarItem>

                        <a href="#cont" color="foreground">
                        تواصل
                        </a>

                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" to='/studentDashBoard'>
                        الملف الشخصي
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <a  href="#deps" color="foreground">
                        الاقسام
                    </a>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" to="/home">
                        الصفحة الرئيسية
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent justify="end">
                {/* <NavbarItem className="hidden lg:flex">
                    <Link href="#">تسجيل الدخول</Link>
                </NavbarItem> */}

<NavbarItem>
    <Link to='/login'>
        <Button variant="flat" className="px-8 rounded-2xl bg-gradient-to-br from-orange-500 to-yellow-400 text-white text-lg">
            التسجيل
        </Button>
    </Link>
</NavbarItem>

            </NavbarContent>

            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full"
                            color={
                                index === 2 ? "warning" : "foreground"
                            }
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}

export default NavBar
