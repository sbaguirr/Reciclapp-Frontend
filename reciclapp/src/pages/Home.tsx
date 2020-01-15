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

class Home extends React.Component<any,any> {

  render() {
    return (
      <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>Inventario de correo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonTitle className="ion-text-center">Nuevo correo electrónico</IonTitle>
        <p className="ion-text-center">
          <img src="./assets/icon/user.png" alt="Usuario" />
        </p>
        <form action="post">
          <IonList>
          <IonItem>
              <IonLabel position="stacked" >Usuario<IonText color="danger">*</IonText></IonLabel>
              <IonInput  className="ion-margin-top" placeholder="Nombres del empleado" ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Departamento</IonLabel>
              <IonInput className="ion-margin-top" disabled name="departamento"></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">BSPI-Punto</IonLabel>
              <IonInput className="ion-margin-top" disabled name="bspi_punto"></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Correo<IonText color="danger">*</IonText></IonLabel>
              <IonInput className="ion-margin-top" placeholder="example@hospitalleonbecerra.org" type="email"></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Contraseña<IonText color="danger">*</IonText></IonLabel>
              <IonInput className="ion-margin-top"></IonInput>
            </IonItem>
            <IonList>
              <IonItem>
                <IonLabel position="stacked">Estado<IonText color="danger">*</IonText></IonLabel>
                <IonSelect className="ion-margin-top" okText="Ok" cancelText="Cancelar">
                  <IonSelectOption selected>En uso</IonSelectOption>
                  <IonSelectOption>Inactivo</IonSelectOption>
                </IonSelect>
              </IonItem>
            </IonList>
            <p className="ion-text-center">
              <IonButton color="primary">Cancelar</IonButton>
              <IonButton color="secondary" type="submit">Guardar</IonButton>
            </p>
          </IonList>
        </form>
      </IonContent>
    </IonPage>






    )
  }
}

export default Home;















