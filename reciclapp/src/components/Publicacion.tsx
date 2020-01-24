import { IonCard, IonCardHeader, IonLabel, IonCardSubtitle, IonCardTitle, IonCardContent, IonGrid, IonRow, IonIcon } 
from '@ionic/react';
import { bookmark, time } from 'ionicons/icons';
import React from 'react';
import { IPublicacion } from './IPublicacion';


class Publicacion extends React.Component<IPublicacion>  {
    render() {
        return (
            <IonCard>
                <IonCardHeader>
                    <img src={this.props.imagen} alt="mi publicación"></img>
                    <IonCardTitle>{this.props.nombre} </IonCardTitle>
                    <IonCardSubtitle>$ {this.props.precio}</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                    {this.props.descripcion}
                    <IonGrid>
                        <IonRow>
                            <IonLabel> <IonIcon icon={time}></IonIcon> {this.props.fecha_publicacion} </IonLabel>   
                        </IonRow>
                        <IonRow>
                            <IonLabel> <IonIcon icon={bookmark}></IonIcon> {this.props.categoria} </IonLabel>     
                        </IonRow>
                    </IonGrid>
                    {/* <IonItem> */}
                        {/* <IonLabel>{this.props.estado}</IonLabel>  */}
                        {/* <IonToggle value={this.props.estado} onChange={() => {}} /> */}
                    {/* </IonItem> */}
                </IonCardContent>
            </IonCard>
        );
    }
};


export default Publicacion;
