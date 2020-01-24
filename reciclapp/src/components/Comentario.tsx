import {
    IonItem, IonLabel, IonAvatar, IonList
} from '@ionic/react';
import React from 'react';

class Comentario extends React.Component<any, any>  {
    render() {
        return (
            <IonList >
                <IonItem>
                    <IonLabel>
                        <h2>{this.props.comentario_usuario}</h2>
                        <div className="ion-text-justify ion-margin-top">
                            {this.props.comentario}   </div>
                        <p><small>{this.props.comentario_fecha}</small></p>
                    </IonLabel>
                    <IonAvatar slot="start"><img src="./assets/icon/miniuser.svg" alt="imagen" /></IonAvatar>
                </IonItem>
            </IonList>
        );
    }
};


export default Comentario;