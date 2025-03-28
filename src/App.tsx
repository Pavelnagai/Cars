import eruda from "eruda";
import { AppRouter } from "./app/providers/route/router";
import { BrowserRouter } from "react-router-dom";
import React from "react";


export const App = () => {

    eruda.init()

  return (
      <>
          <div className="app h-full">
              <BrowserRouter>
                  <AppRouter />
              </BrowserRouter>
          </div>
      </>
  );
}
