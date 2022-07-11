import ContentCard from "../components/ContentCard";
import home from "../JSON/home.json";
import { authVerify0 } from "../atoms/authCheck";
import { useRecoilValue } from "recoil";

function Home() {
  const auth = useRecoilValue(authVerify0);
  return (
    <main
      className={`p-4 bg-slate-900 ${auth ? "main-window" : "main-window-2"}`}
    >
      <div
        className={`h-full w-full p-5 inline-flex flex-row ${
          !auth && "justify-center"
        } content-between bg-slate-900 rounded`}
      >
        {home.map((i) => (
          <ContentCard {...i} />
        ))}
      </div>
    </main>
  );
}

export default Home;
