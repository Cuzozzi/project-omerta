import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { userAuth } from "../atoms/userAuth";
import GamebarLink from "./GamebarLink";
import AllRoutes from "./routes";

function MainAppPage() {
  const auth = useRecoilValue(userAuth);

  useEffect(() => console.log("Render Check"), []);
  if (auth) {
    return (
      <div>
        <main>
          <div className="desktop gameplay-bar flex bg-base-200">
            <div className="w-28 justify-center items-center inline-flex flex-col navbar gap-10 bg-base-200">
              <GamebarLink path="/map" domRender="Map" />
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
        <main>
          <div className="mobile gameplay-bar flex bg-base-200">
            <AllRoutes />
          </div>
        </main>
      </div>
    );
  } else {
    return (
      <main>
        <div className="gameplay-bar flex bg-base-200">
          <AllRoutes />
        </div>
      </main>
    );
  }
}

export default MainAppPage;
