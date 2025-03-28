import React, {useEffect} from 'react';
import { Header } from "./widget/header/header";
import {useMe} from "./shared/hooks/useMe";

function App() {
    useMe()

    useEffect(() => {
        import('eruda').then((lib) => lib.default.init())
    }, []);
  return (
      <div style={{ padding: '20px' }}>
       <Header />
      </div>
  );
}

export default App;
