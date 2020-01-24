import { IonLabel, IonContent, IonButton, IonList, IonItem, IonIcon, IonText } from '@ionic/react';
import React from 'react';
import {  logoWhatsapp } from 'ionicons/icons';
//import { IPublicacion } from '../components/IPublicacion';
/*
interface IModal {
    show: any;
}*/

class Modal extends React.Component<any, any>  {

    render() {
        return (
            <IonContent>
                <h2 className="ion-margin-start">{this.props.nombre}</h2>
                <img src={this.props.imagen} alt="publicacion" />
                <IonText color="primary"><h2 className="ion-text-end ion-margin-end">${this.props.precio}</h2></IonText>
                <IonList>
                    <IonItem>
                        <IonLabel position="stacked" >Descripción</IonLabel>
                        
                        <div className="ion-text-justify ion-margin-top">
                         {this.props.descripcion}   </div>
                        
                    </IonItem>
                </IonList>
                <IonButton href={`https://api.whatsapp.com/send?phone=593${this.props.telefono}`} expand="full" color="secondary">
                    Contactar al vendedor
                    <IonIcon slot="end" icon={logoWhatsapp}></IonIcon>
                    </IonButton>
            </IonContent>

        )
    }
}


export default Modal;