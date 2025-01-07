import Link from "next/link";
// use the nextJs image class to wrap images
import Image from "next/image";
import LogoImg from "@/public/vercel.svg";
// keep in mind it has to be called .module.css
import classes from "./main-header.module.css";

export default function MainHeader() {
  // call the css classes like prop for the classes prop
  return <header className={classes.header}>
    <Link href="/">
        <Image src={LogoImg} alt="Logo" style={{ width: 50, height: 'auto' }} priority />
        Next Meals
    </Link>

    <nav>
      <ul>
        <li>
          <Link href="/meals">Meals</Link>
        </li>
        <li>
          <Link href="/meals/share">Share</Link>
        </li>
        <li>
          <Link href="/community">Community</Link>
        </li>
      </ul>
    </nav>
  </header>
}