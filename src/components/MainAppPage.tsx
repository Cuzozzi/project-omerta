import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { userAuth } from "../atoms/userAuth";
import AllRoutes from "./routes";

function MainAppPage() {
  const auth = useRecoilValue(userAuth);
  useEffect(() => console.log("Render Check"), []);
  if (auth) {
    return (
      <div>
        <main>
          <div className="desktop flex bg-base-200 min-h-screen">
            <AllRoutes />
          </div>
        </main>
        <main>
          <div className="mobile flex bg-base-200 min-h-screen">
            <AllRoutes />
          </div>
        </main>
      </div>
    );
  } else {
    return (
      <main>
        <div className="flex bg-base-200 min-h-screen">
          <AllRoutes />
        </div>
      </main>
    );
  }
}

export default MainAppPage;
