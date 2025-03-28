import eruda from "eruda";
import { AppRouter } from "./app/providers/route/router";


export const App = () => {

    eruda.init()

  return (
      <>
          <div className="app h-full">
                 <AppRouter />
          </div>
      </>
  );
}
