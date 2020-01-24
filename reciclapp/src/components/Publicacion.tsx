import { IonCard, IonCardHeader, IonLabel, IonCardSubtitle, IonCardTitle, IonCardContent, IonGrid, IonRow, IonIcon, IonModal, IonHeader, IonToolbar, IonButtons, IonButton, IonTitle }
    from '@ionic/react';
import { bookmark, time, arrowBack } from 'ionicons/icons';
import React from 'react';
import { IPublicacion } from './IPublicacion';
import ModalPublicacion from './ModalPublicacion';


class Publicacion extends React.Component<IPublicacion,any>  {
    constructor(props: IPublicacion) {
        super(props);
        this.state = {
            open: false
        }
    }
    render() {
        return (
            <div>
                <IonCard onClick={() => this.setState({ open: true })}>
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
                    </IonCardContent>
                </IonCard>
                <IonModal isOpen={this.state.open}>
                    <IonHeader>
                        <IonToolbar color="primary">
                            <IonButtons slot="start">
                                <IonButton onClick={() => this.setState({ open: false })} shape="round" ><IonIcon icon={arrowBack}></IonIcon></IonButton>
                            </IonButtons>
                            <IonTitle>Información del producto</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <ModalPublicacion nombre={this.props.nombre} imagen={this.props.imagen}
                        descripcion={this.props.descripcion} precio={this.props.precio} fecha_publicacion={this.props.fecha_publicacion} categoria={this.props.categoria}
                        id_objeto={this.props.id_objeto} usuario_actual={this.props.usuario_actual}></ModalPublicacion>

                </IonModal>
            </div>
        );
    }
};


export default Publicacion;
