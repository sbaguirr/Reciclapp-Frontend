import { IonLabel, IonContent, IonButton, IonList, IonItem, IonIcon, IonText, IonModal, IonHeader, IonToolbar, IonButtons, IonTitle } from '@ionic/react';
import React from 'react';
import '../theme/Estilo.css';
import { logoWhatsapp, arrowBack, text, arrowForward } from 'ionicons/icons';
import ModalComentario from './ModalComentario';

class ModalPublicacion extends React.Component<any, any>  {
    constructor(props: any) {
        super(props);
        this.state = {
            open: false
        }
    }

    render() {
        return (
            <IonContent>
                <h2 className="ion-margin-start">{this.props.nombre}</h2>
                <p className="ion-margin-start">Usuario: {this.props.vendedor}</p>
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
                <IonList>
                    <IonItem onClick={() => this.setState({ open: true })}>

                        <IonLabel>Ver Comentarios</IonLabel>

                        <IonIcon icon={text} slot="start" color="secondary"></IonIcon>
                        <IonIcon icon={arrowForward} slot="end"></IonIcon>
                    </IonItem>

                </IonList>
                <IonModal isOpen={this.state.open}>
                    <IonHeader>
                        <IonToolbar color="primary">
                            <IonButtons slot="start">
                                <IonButton onClick={() => this.setState({ open: false })} shape="round" ><IonIcon icon={arrowBack}></IonIcon></IonButton>
                            </IonButtons>
                            <IonTitle>Comentarios</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <ModalComentario id_objeto={this.props.id_objeto} usuario_actual={this.props.usuario_actual}></ModalComentario>
                </IonModal>
            </IonContent>

        )
    }
}
export default ModalPublicacion;