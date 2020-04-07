import React from "react";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonTitle,
  IonToolbar,
  IonPage,
} from "@ionic/react";

const Home = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Introduction</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="ion-padding">
          <p>日本大学文理学部情報科学科尾上ゼミのJavaScript演習資料です。</p>
          <p>
            <a href="https://github.com/likr/js-training">リポジトリ</a>
            を読んで演習を進めましょう。
          </p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
