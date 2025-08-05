import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Link from "next/link";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={logoImg} alt="a place with food on it" priority />
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <Link href="/meals">Browse Meals</Link>
            </li>
            <li>
              <Link href="/meals">Foodies Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
// priority because we always want the user to see the header all the time.
