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

class VistaProducto extends React.Component<any,any> {

	render(){
		return(
			<IonPage>
				<IonHeader>
					<IonToolbar color="primary">
          				<IonButtons slot="start">
            				<IonBackButton defaultHref="/" />
          				</IonButtons>
          				<IonTitle>PRODUCTO</IonTitle>
        			</IonToolbar>
				</IonHeader>
				<IonContent className="ion-padding">
					<p className="ion-text-center">
			        	<img src="./assets/icon/producto.png" alt="Foto del producto" />
			        </p>
					<IonTitle className="ion-text-center">Nombre del producto</IonTitle>
			        <IonList>
			        	<IonItem>
				        	<IonLabel position="stacked" >Descripcion</IonLabel>
	             		    <IonInput className="ion-margin-top"></IonInput>
	             		</IonItem>
	             		<IonItem>
				        	<IonLabel position="stacked" >Unidad de Venta</IonLabel>
	             		    <IonInput className="ion-margin-top"></IonInput>
	             		</IonItem>
	             		<IonItem>
				        	<IonLabel position="stacked" >Fecha de Publicacion</IonLabel>
	             		    <IonInput className="ion-margin-top"></IonInput>
	             		</IonItem>
			        </IonList>
				</IonContent>
			</IonPage>
		)
	}

}