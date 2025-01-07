import Link from "next/link";
import styles from "./page.module.css";
import Header from "@/components/header";

export default function Home() {
  return (
    <div className={styles.page}>
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
