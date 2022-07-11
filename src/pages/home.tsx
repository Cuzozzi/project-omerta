import ContentCard from "../components/ContentCard";
import home1 from "../JSON/home1.json";
import home2 from "../JSON/home2.json";
import home3 from "../JSON/home3.json";
import { authVerify0 } from "../atoms/authCheck";
import { useRecoilValue } from "recoil";

function Home() {
  const auth = useRecoilValue(authVerify0);
  if (auth) {
    return (
      <main className="p-4 bg-slate-900 main-window">
        <div className="h-full w-full p-5 inline-flex flex-row content-between bg-slate-900 rounded">
          <ContentCard {...home1} />
          <ContentCard {...home2} />
          <ContentCard {...home3} />
        </div>
      </main>
    );
  } else {
    return (
      <main className="p-4 bg-slate-900 main-window-2">
        <div className="h-full w-full p-5 inline-flex flex-row justify-center content-between bg-slate-900 rounded">
          <ContentCard {...home1} />
          <ContentCard {...home2} />
          <ContentCard {...home3} />
        </div>
      </main>
    );
  }
}

export default Home;
