import {
	
}
import React from 'react';
class PerfilImagen extends React.Component<any,any> {

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
				<IonContent>
					<IonTitle className="ion-text-center">Nuevo correo electrónico</IonTitle>
			        <p className="ion-text-center">
			          <img src="./assets/icon/producto.png" alt="Foto del producto" />
			        </p>
				</IonContent>
			</IonPage>
		)
	}

}