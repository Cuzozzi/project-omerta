import "../output.css";
import ContentCard from "../components/ContentCard";
import home from "../JSON/home.json";
import { userAuth } from "../atoms/userAuth";
import { useRecoilValue } from "recoil";

function Home() {
  const auth = useRecoilValue(userAuth);
  return (
    <div>
      <main
        className={`desktop p-2 bg-base-300 ${
          auth ? "main-window" : "main-window"
        }`}
      >
        <div
          className={`h-full w-full p-5 inline-flex flex-col md:flex-row ${
            !auth && "justify-center"
          } content-between bg-base-300 rounded my-auto`}
        >
          {home.map((i, index) => (
            <ContentCard {...i} key={index} />
          ))}
        </div>
      </main>
      <main className={`mobile p-4 bg-base-300`}>
        <div
          className={`h-full w-full p-5 inline-flex flex-col md:flex-row justify-center content-between bg-base-300 rounded`}
        >
          {home.map((i, index) => (
            <ContentCard {...i} key={index} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Home;
