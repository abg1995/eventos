import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "@Home.module.css";
const inter = Inter({ subsets: ["latin"] });
import Image from "next/image";

function EventPerCityPage({ data, pageName }) {
  return (
    <div className={`${styles.main} ${inter.className}`}>

      <h1> Events in {pageName}</h1>
      {data.map((ev) => (
        <Link key={ev.id} href={`/events/${ev.city}/${ev.id}`}><Image height="250" width="300" src={ev.image} />
          <h3>{ev.title}</h3> <p>{ev.description}</p>
        </Link>
      ))}
    </div>
  );
}

export default EventPerCityPage;

export async function getStaticProps(context) {
  console.log(context);
  const id = context?.params.cat;
  const { allEvents } = await import("/data/data.json");

  const data = allEvents.filter((ev) => ev.city === id);
  console.log("data HERE",data);
  return {
    props: {
      data,
      pageName: id
    },
  };
}

export async function getStaticPaths() {
  const { events_categories } = await import("/data/data.json");
  const allPaths = events_categories.map((ev) => {
    return {
      params: {
        cat: ev.id.toString(),
      },
    };
  });
  return {
    paths: allPaths,
    fallback: false,
  };
}
