import React, {useEffect} from 'react';
import { Header } from "./widget/header/header";
import {useMe} from "./shared/hooks/useMe";
import eruda from "eruda";

function App() {
    eruda.init()

    useMe()

  return (
      <div style={{ padding: '20px' }}>
       <Header />
      </div>
  );
}

export default App;
