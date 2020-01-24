import {
  IonContent,
  IonHeader,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem
} from '@ionic/react';
import React from 'react';

class PerfilProducto extends React.Component<any,any> {

render(){
    return(
      <IonPage>
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>Nombre del Producto</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <p className="ion-text-center">
            <img src="./assets/icon/foto.png" alt="fotoproducto" />
          </p>
          <IonItem>
          	<IonTitle color="primary">Botellas Recicladas</IonTitle>
            <IonLabel color="primary">Precio del producto</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked" color="dark">Descripción</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked" color="dark">Unidad de Venta</IonLabel> 
          </IonItem> 
          <IonItem>
            <IonLabel position="stacked" color="dark">Fecha de Publicación</IonLabel> 
          </IonItem>     
        </IonContent>
      </IonPage>
    )
  }
}

export default PerfilProducto;