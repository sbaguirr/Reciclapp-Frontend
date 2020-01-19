import{  
  IonButtons,
 
  IonHeader,  
  IonContent,
  
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

class Perfil extends React.Component<any,any> {

	render(){
		return(
			<IonPage>
				<IonHeader>
					<IonToolbar color="primary">
          				<IonButtons slot="start">
            				<IonBackButton defaultHref="/" />
          				</IonButtons>
          				<IonTitle>Perfil</IonTitle>
        			</IonToolbar>
				</IonHeader>
				<IonContent className="ion-padding">
            <p className="ion-text-center">
                <img src="./assets/icon/user.png" alt="Foto del Usuario" />
            </p>
            <IonTitle className="ion-text-center">Username</IonTitle>
            <IonList>
              <IonItem>
                <IonLabel position="stacked" >Nombres</IonLabel>
                <IonInput className="ion-margin-top"></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="stacked" >Ciudad</IonLabel>
                <IonInput className="ion-margin-top"></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="stacked" >Direccion</IonLabel>
                <IonInput className="ion-margin-top"></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="stacked" inputmode="tel" >Telefonos</IonLabel>
                <IonInput className="ion-margin-top"></IonInput>
              </IonItem>
            </IonList>
        </IonContent>
      </IonPage>
    )
  }

}