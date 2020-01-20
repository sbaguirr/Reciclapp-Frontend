import {
  IonContent,
  IonHeader,
  IonLabel,
  IonPage,
  IonTitle,
  IonInput,
  IonButton,
  IonToolbar,
  IonItem
} from '@ionic/react';
import React from 'react';

class InicioSesion extends React.Component<any,any> {

  render(){
    return(
      <IonPage>
        <IonHeader>
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle></IonTitle>
          </IonToolbar>
        </IonHeader>
        </IonHeader>
        <IonContent className="ion-padding">
          <p className="ion-text-center">
            <img src="./assets/icon/logo.png" alt="Reciclaje" />
            <IonTitle className="ion-text-center">Reciclapp</IonTitle>
          </p>
          <IonItem>
            <IonLabel position="stacked" color="dark">Usuario</IonLabel>
            <IonInput placeholder="Nombre de usuario"></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked" color="dark">Contraseña</IonLabel>
            <IonInput type="password"></IonInput>   
          </IonItem> 
          <p className="ion-text-center">
            <IonButton color="primary" href="/home">Iniciar Sesión</IonButton>
          </p>     
        </IonContent>
      </IonPage>
    )
  }
}

export default InicioSesion;