import ContentCard from "../components/ContentCard";
import home from "../JSON/home.json";
import { authVerify0 } from "../atoms/authCheck";
import { useRecoilValue } from "recoil";

function Home() {
  const auth = useRecoilValue(authVerify0);
  return (
    <div>
      <main
        className={`desktop p-4 bg-slate-900 ${
          auth ? "main-window" : "main-window-2"
        }`}
      >
        <div
          className={`h-full w-full p-5 inline-flex flex-col md:flex-row ${
            !auth && "justify-center"
          } content-between bg-slate-900 rounded`}
        >
          {home.map((i, index) => (
            <ContentCard {...i} key={index} />
          ))}
        </div>
      </main>
      <main className={`mobile p-4 bg-slate-900`}>
        <div
          className={`h-full w-full p-5 inline-flex flex-col md:flex-row justify-center content-between bg-slate-900 rounded`}
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
