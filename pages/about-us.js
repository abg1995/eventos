import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
const inter = Inter({ subsets: ["latin"] });


function AboutUsPage() {
  return (
    <div className={`${styles.main} ${inter.className}`}>
      <nav >
        </nav>
        <div>
      <h1>About us page</h1>
      <br />
      <p>
        Consequat Occaecat non enim ipsum exercitation. Exercitation tempor
        culpa duis excepteur laboris sit eiusmod duis. Eu proident duis labore
        anim deserunt in. Elit ad veniam aliqua et. Sunt proident culpa ut in
        sint occaecat v oluptate incididunt eiusmod ea aliquip laboris ea ad.
        Velit irure culpa enim exercitation sint elit laborum consequat. l abore
        sunt voluptate nisi velit anim duis ipsum commodo pariatur commodo
        aliqua qui. Ex nulla reprehenderit tempor incididunt adipisicing
        deserunt. Laborum et velit velit sint exercitation id id. Eiusmod
        nostrud magna labore ipsum ex m ollit incididunt sunt sunt do ex
        excepteur veniam. Esse proident nulla dolor commodo duis id consequat
        occaecat. Magna veniam aute commodo anim reprehenderit e xcepteur
        adipisicing do labore in eu Lorem sunt. Officia eu culpa exercitation
        labore cillum proident excepteur.
      </p>
      </div>
    </div>
  );
}

export default AboutUsPage;
