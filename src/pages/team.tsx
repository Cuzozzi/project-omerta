import "../output.css";
import team from "../JSON/team.json";
import ContentCard from "../components/ContentCard";

function Team() {
  return (
    <main className="p-4 bg-slate-900 main-window">
      <div className="h-full w-full p-5 inline-flex flex-col md:flex-row justify-evenly bg-slate-900 rounded">
        {team.map((i, index) => (
          <ContentCard {...i} key={index} />
        ))}
      </div>
    </main>
  );
}

export default Team;