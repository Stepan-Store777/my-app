import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1> Hello mundo, tudo bem?</h1>
      <h2> Eu serei o melhor do mundo</h2>
      <h3> Não importa oque dizem eu sou melhor!!</h3>
      <Link href={"/sobre"}> Sobre </Link>
    </main>
  );
}
