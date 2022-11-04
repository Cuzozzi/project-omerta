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
        className={`desktop p-4 bg-base-300 ${
          auth ? "main-window" : "main-window"
        }`}
      >
        <div
          className={`h-full w-full p-5 inline-flex flex-col md:flex-row ${
            !auth && "justify-center"
          } content-between bg-base-300 my-auto`}
        >
          {team.map((i, index) => (
            <ContentCard {...i} key={index} />
          ))}
        </div>
      </main>
      <main className={`mobile p-4 bg-base-300`}>
        <div
          className={`h-full w-full p-5 inline-flex flex-col md:flex-row justify-center content-between bg-base-300`}
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
