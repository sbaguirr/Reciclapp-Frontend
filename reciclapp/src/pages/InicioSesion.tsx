import {
  IonContent,
  IonHeader,
  IonLabel,
  IonPage,
  IonTitle,
  IonInput,
  IonButton
} from '@ionic/react';
import React from 'react';

class InicioSesion extends React.Component<any,any> {

  render(){
    return(
      <IonPage>
        <IonHeader>

        </IonHeader>
      
        <IonContent className="ion-padding">
          <p className="ion-text-center">
            <img src="./assets/icon/login.png" alt="Reciclaje" />
            <IonTitle className="ion-text-center">Reciclapp</IonTitle>
          </p>
          <p className="ion-text-center">
            <IonLabel position="stacked" color="dark">Usuario</IonLabel>
            <IonInput></IonInput>
          </p>
          <p className="ion-text-center">
            <IonLabel position="stacked" color="dark">Contraseña</IonLabel>
            <IonInput type="password"></IonInput>          
          </p>
          <p className="ion-text-center">
            <IonButton color="primary" size="large" href="/home">Iniciar Sesion</IonButton>
          </p>
        </IonContent>
      </IonPage>
    )
  }

}

export default InicioSesion;