import React, {useEffect} from 'react';
import { Header } from "./widget/header/header";
import {useMe} from "./shared/hooks/useMe";
import eruda from "eruda";
import {UsersList} from "./widget/users/users";
import {isTMA} from "@telegram-apps/sdk-react";

function App() {
    eruda.init()

    useMe()

    useEffect(() => {
        const checkTMA = async () => {
            if (await isTMA()) {
                console.log('It\'s Telegram Mini Apps');
            }
        };
        checkTMA();
    }, []);

  return (
      <div style={{ padding: '20px' }}>
       <Header />
          <UsersList/>
      </div>
  );
}

export default App;
