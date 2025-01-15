'use client';
import Link from "next/link";
// another way to define css modules...
import styles from "./page.module.css";
import Header from "@/components/header";
import ClientSideComponent from "@/components/client/client-side-component";

export default function Home() {
  return (
    <div className={styles.page}>
      <div>
      <ClientSideComponent />
      </div>
      <main className={styles.main}>
        <Header />
        <div>
          <Link href="/about">
            About
          </Link>
        </div>
        <div>
          <Link href="/meals">
            <p>Meals</p>
          </Link>
          <Link href="/meals/share">
            <p>Share</p>
          </Link>
          <Link href="/community">
            <p>Community</p>
          </Link>
        </div>
      </main>
    </div>
  );
}
