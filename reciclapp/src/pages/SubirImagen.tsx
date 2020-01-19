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

class SubirImagen extends React.Component<any,any> {

	render(){
		return(
			<IonPage>
				<IonHeader>
					<IonToolbar color="primary">
          	<IonButtons slot="start">
      				<IonBackButton defaultHref="/" />
    				</IonButtons>
      			<IonTitle>Publica un anuncio</IonTitle>
    			</IonToolbar>
  			</IonHeader>
				<IonContent className="ion-padding">
          <p className="ion-text-center">
            <img src="./assets/icon/user.png" alt="Subir una imagen" />
          </p>
          <IonList>
            <IonItem>
              <IonLabel position="stacked" >Selecciona una categoría</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked" >Ingrese una descripción del anuncio</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked" >Información de contacto</IonLabel>
            </IonItem>
          </IonList>
          <p className="ion-text-center">
            <IonButton color="primary">PUBLICAR</IonButton>
          </p>
        </IonContent>
      </IonPage>
    )
  }

}