import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './App';
import Connexion from './component/Connexion';
import Pendu from './component/Pendu';

const Root = () => {
    return (
      <BrowserRouter>
         <div>         {/* Wrapper dans une div pour que ça fonctionne */}
          <Switch>
            <Route  exact path="/" component={Connexion} />
            <Route  path="/pseudo/:pseudo" component={Pendu} />
            <Route component={App} />
        </Switch>
        </div>
      </BrowserRouter>
    )
  }

export default Root;