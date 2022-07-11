import "../output.css";
import charlotte from "../JSON/charlotte.json";
import mango from "../JSON/mango.json";
import tom from "../JSON/tom.json";
import ContentCard from "../components/ContentCard.tsx";

function Team() {
  return (
    <main className="p-4 bg-slate-900 main-window">
      <div className="h-full w-full p-5 inline-flex flex-col md:flex-row justify-evenly bg-slate-900 rounded">
        <ContentCard {...charlotte} />
        <ContentCard {...mango} />
        <ContentCard {...tom} />
      </div>
    </main>
  );
}

export default Team;
