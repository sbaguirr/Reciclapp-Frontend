import {
  IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonGrid, IonRow, IonIcon, IonModal, IonHeader, IonToolbar, IonButtons, IonButton, IonTitle
} from '@ionic/react';
import { bookmark, time, arrowBack } from 'ionicons/icons';
import React from 'react';
import { IPublicacion } from '../components/IPublicacion';
import Modal from '../pages/Modal';


class Publicacion extends React.Component<IPublicacion, any>  {
  constructor(props: IPublicacion) {
      super(props);
      this.state = {
          open: false
      }
  }
  render() {
      return (
          <div>
          <IonCard color="light" onClick={() => this.setState({ open: true })}>
              <IonCardHeader>
                  <IonCardSubtitle>$ {this.props.precio}</IonCardSubtitle>
                  <IonCardTitle>{this.props.nombre} </IonCardTitle>
              </IonCardHeader>
              <img src={this.props.imagen} alt="publicacion" />
              <IonCardContent>
                  {this.props.descripcion}
                  <IonGrid>
                      <IonRow>
                          <IonIcon icon={time}></IonIcon>
                          <small>{this.props.fecha_publicacion}</small>
                      </IonRow>
                      <IonRow>
                          <IonIcon icon={bookmark}></IonIcon>
                          {this.props.categoria}
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
               
                  <Modal nombre={this.props.nombre} imagen={this.props.imagen}
                 descripcion={this.props.descripcion} precio={this.props.precio} fecha_publicacion={this.props.fecha_publicacion} categoria={this.props.categoria}></Modal>
                 
              </IonModal>
          </div>
      );
  }
};


export default Publicacion;
