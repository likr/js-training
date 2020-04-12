import React from "react";
import { Route } from "react-router-dom";
import {
  IonApp,
  IonContent,
  IonHeader,
  IonItem,
  IonRouterOutlet,
  IonMenu,
  IonList,
  IonSplitPane,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import Home from "./pages/Home";
import Lesson01 from "./pages/Lesson01";
import Lesson02 from "./pages/Lesson02";
import Lesson03 from "./pages/Lesson03";
import Lesson04 from "./pages/Lesson04";
import Lesson05 from "./pages/Lesson05";
import Lesson06 from "./pages/Lesson06";
import Lesson07 from "./pages/Lesson07";
import Lesson08 from "./pages/Lesson08";
import Lesson09 from "./pages/Lesson09";
import Lesson10 from "./pages/Lesson10";
import Answer01 from "./pages/Answer01";
import Answer02 from "./pages/Answer02";
import Answer03 from "./pages/Answer03";
import Answer04 from "./pages/Answer04";
import Answer05 from "./pages/Answer05";
import Answer06 from "./pages/Answer06";
import Answer07 from "./pages/Answer07";
import Answer08 from "./pages/Answer08";
import Answer09 from "./pages/Answer09";
import Answer10 from "./pages/Answer10";

const App = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <IonMenu type="overlay" side="start" menuId="menu" contentId="main">
            <IonHeader>
              <IonToolbar>
                <IonTitle>Menu</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonContent>
              <IonList>
                <IonItem routerLink="/">Introduction</IonItem>
                <IonItem routerLink="/lesson01">Lesson 01</IonItem>
                <IonItem routerLink="/lesson02">Lesson 02</IonItem>
                <IonItem routerLink="/lesson03">Lesson 03</IonItem>
                <IonItem routerLink="/lesson04">Lesson 04</IonItem>
                <IonItem routerLink="/lesson05">Lesson 05</IonItem>
                <IonItem routerLink="/lesson06">Lesson 06</IonItem>
                <IonItem routerLink="/lesson07">Lesson 07</IonItem>
                <IonItem routerLink="/lesson08">Lesson 08</IonItem>
                <IonItem routerLink="/lesson09">Lesson 09</IonItem>
                <IonItem routerLink="/lesson10">Lesson 10</IonItem>
              </IonList>
            </IonContent>
          </IonMenu>
          <IonRouterOutlet id="main">
            <Route path="/" component={Home} exact />
            <Route path="/lesson01" component={Lesson01} />
            <Route path="/lesson02" component={Lesson02} />
            <Route path="/lesson03" component={Lesson03} />
            <Route path="/lesson04" component={Lesson04} />
            <Route path="/lesson05" component={Lesson05} />
            <Route path="/lesson06" component={Lesson06} />
            <Route path="/lesson07" component={Lesson07} />
            <Route path="/lesson08" component={Lesson08} />
            <Route path="/lesson09" component={Lesson09} />
            <Route path="/lesson10" component={Lesson10} />
            <Route path="/answer01" component={Answer01} />
            <Route path="/answer02" component={Answer02} />
            <Route path="/answer03" component={Answer03} />
            <Route path="/answer04" component={Answer04} />
            <Route path="/answer05" component={Answer05} />
            <Route path="/answer06" component={Answer06} />
            <Route path="/answer07" component={Answer07} />
            <Route path="/answer08" component={Answer08} />
            <Route path="/answer09" component={Answer09} />
            <Route path="/answer10" component={Answer10} />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
