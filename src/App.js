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
import Lecture1 from "./pages/Lecture1";
import Lecture2 from "./pages/Lecture2";
import Lecture3 from "./pages/Lecture3";
import Lecture4 from "./pages/Lecture4";
import Lecture5 from "./pages/Lecture5";
import Lecture6 from "./pages/Lecture6";
import Lecture7 from "./pages/Lecture7";
import Lecture8 from "./pages/Lecture8";
import Lecture9 from "./pages/Lecture9";
import Lecture10 from "./pages/Lecture10";

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
                <IonItem href="/">Home</IonItem>
                <IonItem href="/lecture1">Lecture1</IonItem>
                <IonItem href="/lecture2">Lecture2</IonItem>
                <IonItem href="/lecture3">Lecture3</IonItem>
                <IonItem href="/lecture4">Lecture4</IonItem>
                <IonItem href="/lecture5">Lecture5</IonItem>
                <IonItem href="/lecture6">Lecture6</IonItem>
                <IonItem href="/lecture7">Lecture7</IonItem>
                <IonItem href="/lecture8">Lecture8</IonItem>
                <IonItem href="/lecture9">Lecture9</IonItem>
                <IonItem href="/lecture10">Lecture10</IonItem>
              </IonList>
            </IonContent>
          </IonMenu>
          <IonRouterOutlet id="main">
            <Route path="/" component={Home} exact />
            <Route path="/lecture1" component={Lecture1} />
            <Route path="/lecture2" component={Lecture2} />
            <Route path="/lecture3" component={Lecture3} />
            <Route path="/lecture4" component={Lecture4} />
            <Route path="/lecture5" component={Lecture5} />
            <Route path="/lecture6" component={Lecture6} />
            <Route path="/lecture7" component={Lecture7} />
            <Route path="/lecture8" component={Lecture8} />
            <Route path="/lecture9" component={Lecture9} />
            <Route path="/lecture10" component={Lecture10} />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
