import "../output.css";
import { Link } from "react-router-dom";
function Team() {
  return (
    <main className="p-4 bg-slate-900 main-window">
      <div className="h-full w-full p-5 inline-flex flex-row justify-evenly bg-slate-900 rounded">
        <div className="w-96 h-100 card m-4 bg-slate-800">
          <figure className="h-64 overflow-hidden">
            <img src="images/charlotte.jpg" alt="" className="object-fill" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Charlotte Dunleavey</h2>
            <h4 className="pb-2">Lead Developer</h4>
            <p>
              I'm a new developer, this is my first long-term project. I've
              tried to be ambitious and use modern techonolgies and libaries, so
              we can give an amazing user experience.
            </p>
            <p className="">
              I care deeply about this game, I've created something over that
              I'd personally play for many hours. I hope you will enjoy it as
              much as I do.
            </p>
          </div>
        </div>
        <div className="w-96 h-100 card m-4 bg-slate-800">
          <figure className="h-64 overflow-hidden">
            <img src="images/mango.jpg" alt="" className="object-cover" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Mango</h2>
            <h4 className="pb-2">Senior Developer</h4>
            <p>
              I required many snacks and scratchies, to work on this project.
              I'm a world-renowed developer, so my rate is not very cheap.
            </p>
            <p className="">
              You should check out my contributions on Github and StackOverflow,
              and let me know how amazed you are by my superior code.
            </p>
            <p>Ciao.</p>
          </div>
        </div>
        <div className="w-96 h-100 card m-4 bg-slate-800">
          <figure className="overflow-hidden">
            <img src="images/tom.jpg" alt="" className="object-fill" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Tomáš Schmied</h2>
            <h4 className="pb-2">Consultant Developer</h4>
            <p>
              I couldn't do this without him, he's been my personal stack
              overflow. Every 403 and 200, he was there to guide and help me.
            </p>
            <p>
              My entire world, I can't express how much you've done for me. You
              plus programming have given me purpose, and a future.
            </p>
            <p>I will love you forever and always.</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Team;
