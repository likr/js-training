import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonTitle,
  IonToolbar,
  IonPage,
  useIonViewWillEnter,
} from "@ionic/react";

const LecturePage = ({ dataUrl, convertData, title, Chart }) => {
  const [data, setData] = useState(null);

  useIonViewWillEnter(() => {
    fetch(dataUrl)
      .then((response) => response.json())
      .then((data) => {
        setData(convertData(data));
      });
  }, [dataUrl, convertData]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>{data && <Chart data={data} />}</IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default LecturePage;
