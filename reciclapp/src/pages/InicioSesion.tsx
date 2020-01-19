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
      
        <IonContent className="ion-padding">
          <p className="ion-text-center">
            <img src="./assets/icon/reciclaje.jpg" alt="Reciclaje" />
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
            <IonButton color="primary" size="large">Iniciar Sesion</IonButton>
          </p>
        </IonContent>
      </IonPage>
    )
  }

}

export default InicioSesion;