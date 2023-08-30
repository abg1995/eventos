import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";
const inter = Inter({ subsets: ["latin"] });
import Image from "next/image";
import '/public/logog.webp'


export default function Navbar() {
  return (
    <div className={`${styles.main} ${inter.className}`}>
     <Link href="/"><Image src={'/logog.webp'} height={50} width={50}/> </Link> 
      <Link href="/"> Home</Link>
      <Link href="/events"> Events</Link>
      <Link href="/about-us"> About us</Link>

      <h3>Eventos.com</h3>
    </div>
  );
}
