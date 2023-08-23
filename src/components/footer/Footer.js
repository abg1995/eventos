import styles from "@/styles/Home.module.css";
const inter = Inter({ subsets: ["latin"] });
import { Inter } from "next/font/google";


export function Footer(){

    return(
        <footer className={`${styles.main} ${inter.className}`}>
        <p> time to code bla blab bla BLA BLA BLA ∑</p>
      </footer>

    )
}