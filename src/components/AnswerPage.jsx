import React, { useState } from "react";
import {
  IonButtons,
  IonBackButton,
  IonCheckbox,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonTitle,
  IonToolbar,
  IonPage,
  useIonViewWillEnter,
} from "@ionic/react";
import Markdown from "./Markdown";

const AnswerPage = ({
  answer,
  convertData,
  dataUrl,
  lessonUrl,
  title,
  Chart,
}) => {
  const [data, setData] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

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
            <IonBackButton defaultHref={lessonUrl} />
          </IonButtons>
          <IonTitle>{title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>
            <IonLabel position="stacked">実行結果</IonLabel>
            <div style={{ width: "100%", height: "500px" }}>
              {data && <Chart data={data && convertData(data)} />}
            </div>
          </IonItem>
          <IonItem>
            <IonCheckbox
              slot="end"
              checked={showAnswer}
              onIonChange={(e) => setShowAnswer(e.detail.checked)}
            >
              解答例を表示
            </IonCheckbox>
          </IonItem>
          {showAnswer && (
            <IonItem>
              <IonLabel position="stacked">解答例</IonLabel>

              <Markdown text={answer} />
            </IonItem>
          )}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default AnswerPage;
