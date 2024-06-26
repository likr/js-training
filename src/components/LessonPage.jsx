import React, { useState } from "react";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonMenuButton,
  IonTitle,
  IonToolbar,
  IonPage,
  useIonViewWillEnter,
} from "@ionic/react";
import Markdown from "./Markdown";

const LessonPage = ({
  answerUrl,
  convertData,
  dataUrl,
  instruction,
  title,
  Chart,
}) => {
  const [data, setData] = useState(null);

  useIonViewWillEnter(() => {
    if (dataUrl) {
      fetch(dataUrl)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
        });
    }
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>
            <IonLabel position="stacked">説明</IonLabel>
            <Markdown text={instruction} />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">実行結果</IonLabel>
            <div style={{ width: "100%", height: "500px" }}>
              {data && <Chart data={data && convertData(data)} />}
            </div>
          </IonItem>
          <IonItem routerLink={answerUrl}>表示例を見る</IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default LessonPage;
