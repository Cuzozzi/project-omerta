import "../output.css";
import team from "../JSON/team.json";
import ContentCard from "../components/ContentCard";
import { useRecoilValue } from "recoil";
import { userAuth } from "../atoms/userAuth";

function Team() {
  const auth = useRecoilValue(userAuth);
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
          {team.map((i, index) => (
            <ContentCard {...i} key={index} />
          ))}
        </div>
      </main>
      <main className={`mobile p-4 bg-slate-900`}>
        <div
          className={`h-full w-full p-5 inline-flex flex-col md:flex-row justify-center content-between bg-slate-900 rounded`}
        >
          {team.map((i, index) => (
            <ContentCard {...i} key={index} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Team;
