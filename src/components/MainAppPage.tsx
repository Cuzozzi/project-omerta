import { useRecoilValue } from "recoil";
import { authVerify0 } from "../atoms/authCheck";
import GamebarLink from "./GamebarLink";
import AllRoutes from "./routes";

function MainAppPage() {
  const auth = useRecoilValue(authVerify0);
  if (auth) {
    return (
      <main>
        <div className="gameplay-bar flex bg-slate-900">
          <div className="w-28 border-2 border-slate-800 justify-center items-center inline-flex flex-col navbar gap-10 bg-slate-800">
            <GamebarLink path="/character" domRender="Character" />
            <GamebarLink path="/safehouses" domRender="Safehouses" />
            <GamebarLink path="/rackets" domRender="Rackets" />
            <GamebarLink path="/family" domRender="Family" />
            <GamebarLink path="/politics" domRender="Politics" />
            <GamebarLink path="/trading" domRender="Trading" />
            <GamebarLink path="/intelligence" domRender="Intelligence" />
          </div>
          <AllRoutes />
        </div>
      </main>
    );
  } else {
    return (
      <main>
        <div className="gameplay-bar flex bg-slate-900">
          <AllRoutes />
        </div>
      </main>
    );
  }
}

export default MainAppPage;