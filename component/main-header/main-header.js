import Link from "next/link"
import classes from './/main-header.module.css';
import logoImg from '@/assets/logo.png'
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";

export default function MainHeader(){
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
                    <Link href="/meals">Brwose Meals</Link>
                </li>
                <li>
                    <Link href="/community">Foodies Community</Link>
                </li>
            </ul>
        </nav>
    </header>
        </>
    )
}