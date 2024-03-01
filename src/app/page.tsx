import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1> Hello Tsx, tudo bem?</h1>
      <h2> Eustacio</h2>
      <h3> Eustacio Muito Daora</h3>
      <Link href={"/sobre"}> Sobre </Link>
    </main>
  );
}
