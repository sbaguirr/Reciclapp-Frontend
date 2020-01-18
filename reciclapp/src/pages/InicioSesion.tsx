import {
  IonButtons,
 
  IonContent,
  IonHeader,
  
  IonItem,
  IonLabel,
  IonList,
 
  IonPage,
  IonTitle,
  IonToolbar,
  IonBackButton,
  IonText,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonButton
} from '@ionic/react';
import React from 'react';

class InicioSesion extends React.Component<any,any> {

  render(){
    return(
      <IonPage>
        <IonHeader>

        </IonHeader>
      </IonPage>
      <IonContent>
        <p className="ion-text-center">
          <img src="./assets/icon/reciclaje.jpg" alt="Reciclaje" />
          <IonTitle className="ion-text-center">Reciclapp</IonTitle>
        </p>
      </IonContent>

    )
  }

}

export default InicioSesion;