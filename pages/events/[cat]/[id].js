import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
const inter = Inter({ subsets: ["latin"] });
import Image from "next/image";

function EventPage({ data }) {
  console.log(data);
  return (
    <div className={`${styles.main} ${inter.className}`}>
      <nav>
      </nav>
      <div>
        <Image src={data.image} width={1000} height={1000} alt={data.title} />

        <h1>{data.title}</h1>
        <p>{data.description}</p>
      </div>
    </div>
  );
}

export default EventPage;

export async function getStaticPaths() {
  const { allEvents } = await import("/data/data.json");
  const allPaths = allEvents.map((path) => {
    return {
      params: {
        cat: path.city,
        id: path.id /* <-- nombre del archivo [id] */,
      },
    };
  });
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  console.log(context);
  const { allEvents } = await import("/data/data.json");
  const id = context.params.id;
  const eventData = allEvents.find((ev) => ev.id === id);
  return {
    props: { data: eventData },
  };
}
