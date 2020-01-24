import { IonContent, IonList, IonItem, IonIcon, IonLabel, IonRefresher, IonRefresherContent } from '@ionic/react';
import { person, pin, logoWhatsapp, map } from 'ionicons/icons';
import React from 'react';
import { RefresherEventDetail } from '@ionic/core';



class InformacionPerfil extends React.Component<any, any> {
    doRefresh(event: CustomEvent<RefresherEventDetail>) {
        console.log('Begin async operation');
        setTimeout(() => {
            console.log('Async operation has ended');
            event.detail.complete();
        }, 2000);
    }

    render() {
        return (
            <IonContent className="ion-padding">
                <IonRefresher slot="fixed" onIonRefresh={this.doRefresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>
                <p className="ion-text-center">
                    <img src="./assets/icon/user.png" alt="Foto del Usuario" />
                </p>
                <h2 className="ion-text-center">{this.props.nombreUsuario}</h2>
                <IonList>
                    <IonItem>
                        <IonIcon slot="start" icon={person} color="secondary"></IonIcon>
                        <IonLabel position="stacked" >Nombres</IonLabel>
                        <p className="ion-margin-top">{this.props.nombres}   {this.props.apellidos}</p>
                    </IonItem>
                    <IonItem>
                        <IonIcon slot="start" icon={pin} color="secondary"></IonIcon>
                        <IonLabel position="stacked" >Ciudad</IonLabel>
                        <p className="ion-margin-top">{this.props.ciudad}</p>
                    </IonItem>

                    <IonItem>
                        <IonIcon slot="start" icon={map} color="secondary"></IonIcon>
                        <IonLabel position="stacked" >Dirección</IonLabel>
                        <p className="ion-margin-top">{this.props.direccion}</p>
                    </IonItem>

                    <IonItem>
                        <IonIcon slot="start" icon={logoWhatsapp} color="secondary"></IonIcon>
                        <IonLabel position="stacked" >Teléfono</IonLabel>
                        <p className="ion-margin-top">{this.props.telefono}</p>
                    </IonItem>
                </IonList>
            </IonContent>
        )
    }
}


export default InformacionPerfil;