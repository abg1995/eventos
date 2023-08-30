import { Inter } from "next/font/google";
import styles from "@Home.module.css";
const inter = Inter({ subsets: ["latin"] });

function Page() {
  return (
    <div className={`${styles.main} ${inter.className}`}>
      <h1>Event 1</h1>
    </div>
  );
}

export default Page;
