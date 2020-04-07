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
  const [text, setText] = useState(null);

  useIonViewWillEnter(() => {
    if (dataUrl) {
      fetch(dataUrl)
        .then((response) => response.json())
        .then((data) => {
          setData(convertData(data));
        });
    }
  }, [dataUrl, convertData]);

  useIonViewWillEnter(() => {
    if (answer) {
      fetch(answer)
        .then((response) => response.text())
        .then((text) => {
          setText(text);
        });
    }
  }, [answer]);

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
              {data && <Chart data={data} />}
            </div>
          </IonItem>
          <IonItem>
            <IonLabel>解答例を表示</IonLabel>
            <IonCheckbox
              slot="end"
              checked={showAnswer}
              onIonChange={(e) => setShowAnswer(e.detail.checked)}
            />
          </IonItem>
          {showAnswer && (
            <IonItem>
              <IonLabel position="stacked">解答例</IonLabel>

              <Markdown text={text} />
            </IonItem>
          )}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default AnswerPage;
