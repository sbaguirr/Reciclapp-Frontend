import {
    IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonGrid, IonRow, IonCol, IonIcon, IonItem
} from '@ionic/react';
import { bookmark, time } from 'ionicons/icons';
import React from 'react';
import { IPublicacion } from './IPublicacion';



class Publicacion extends React.Component<IPublicacion>  {
    render() {
        return (
            <IonItem>
            <IonCard color="light">
                <IonCardHeader>
                    <IonCardSubtitle>$ {this.props.precio}</IonCardSubtitle>
                    <IonCardTitle>{this.props.nombre} </IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                    {this.props.descripcion}
                    <IonGrid>
                        <IonRow>
                            <IonCol>
                                <IonIcon icon={time}></IonIcon>
                                {this.props.fecha_publicacion}
                            </IonCol>
                            <IonCol>
                                <IonIcon icon={bookmark}></IonIcon>
                                {this.props.categoria}
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonCardContent>
            </IonCard>
            </IonItem>
        );
    }
};


export default Publicacion;
