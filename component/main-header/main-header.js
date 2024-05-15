'use client';
import NavLink from "./nav-link";
import Link from "next/link"
import classes from './/main-header.module.css';
import logoImg from '@/assets/logo.png'
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import { usePathname } from "next/navigation";
export default function MainHeader(){
    const path = usePathname();
    return (
        <>
        <MainHeaderBackground/>
        <header className={classes.header}>
        <Link href='/' className={classes.logo}>
            <Image  src={logoImg} alt="A plate with food on it" priority/>
            NextLevel fOOD
        </Link>
        <nav className={classes.nav}>
            <ul>
                <li>
                  <NavLink href='/meals'>
                    Browse Meals
                  </NavLink>
                </li>
                <li>
                <NavLink href='/community'>
                    Foodies Community
                    </NavLink>
                    
                </li>
            </ul>
        </nav>
    </header>
        </>
    )
}