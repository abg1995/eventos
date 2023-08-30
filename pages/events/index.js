import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
const inter = Inter({ subsets: ["latin"] });
import Image from "next/image";

function EventPage({ data }) {
  return (
    <div className={`${styles.main} ${inter.className}`}>
      <h1>Event Page</h1>
      <div>
        {data.map((ev) => (
          <Link key={ev.id} href={`/events/${ev.id}`}>
            <Image height="200" width="300" src={ev.image} />
            <h2>{ev.title}</h2><p>{ev.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default EventPage;

export async function getStaticProps() {
  const { events_categories } = await import("/data/data.json");
  return {
    props: {
      data: events_categories
    },
  };
}
