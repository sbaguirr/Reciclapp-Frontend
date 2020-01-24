import {
  IonButtons, IonContent, IonHeader, IonPage, IonLabel, IonChip, IonSlide, IonSlides, IonTitle, IonAvatar, IonToolbar,
  IonButton, IonMenuButton, IonGrid, IonRow, IonCol, IonIcon, IonFab, IonFabButton, IonModal, IonRefresher, IonRefresherContent
} from '@ionic/react';
import React from 'react';
import MetodosAxios from '../services/MetodosAxios';
import Publicacion from '../components/Publicacion';
import { create, contact, arrowBack } from 'ionicons/icons';
import ModalCategoria from '../components/ModalCategoria';
import { RefresherEventDetail } from '@ionic/core';

const slideOpts = {
  initialSlide: 1,
  speed: 200,
  slidesPerView: 1.5,
  spaceBetween: 10,
  centeredSlides: true
};



class Home extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      publicaciones: [] as any,
      usuario_actual: localStorage.user,
      filtro: String,
      openModal: false
    }
  }
  doRefresh(event: CustomEvent<RefresherEventDetail>) {
    console.log('Begin async operation');
    setTimeout(() => {
      console.log('Async operation has ended');
      event.detail.complete();
    }, 2000);
  }

  componentDidMount = () => {
    //   let nombreu: String = localStorage.user; nombreu.slice(1,nombreu.length-1)
    MetodosAxios.ver_publicaciones_otros(this.state.usuario_actual.slice(1, this.state.usuario_actual.length - 1)).then(res => {
      if (res.data.length === 0) {
        console.log("No existen publicaciones");
      } else {
        this.setState({ publicaciones: res.data });

      }
    }).catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar color="primary">
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Reciclapp</IonTitle>
            <IonButtons slot="end">
              <IonButton routerLink="/perfil"><IonIcon icon={contact}></IonIcon></IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>

        <IonContent>
          <IonRefresher slot="fixed" onIonRefresh={this.doRefresh}>
            <IonRefresherContent></IonRefresherContent>
          </IonRefresher>
          <IonSlides pager={true} options={slideOpts}>
            {
              this.state.publicaciones.map((dato: any) => {
                return (
                  <IonSlide key={dato.objeto_id} >
                    <Publicacion key={dato.objeto_id} id_objeto={dato.objeto_id} vendedor={dato.nombre_usuario} nombre={dato.titulo} imagen={dato.ruta}
                      descripcion={dato.descripcion} estado={dato.estado} precio={dato.precio}
                      fecha_publicacion={dato.created_at} categoria={dato.categoria} usuario_actual={this.state.usuario_actual} />
                  </IonSlide>
                )
              })
            }
          </IonSlides>

          <IonFab vertical="bottom" horizontal="end" slot="fixed" color="secondary">
            <IonFabButton href="/producto">
              <IonIcon icon={create}></IonIcon>
            </IonFabButton>
          </IonFab>

          <IonTitle>Categorías populares</IonTitle>
          <IonGrid>
            <IonRow>
              <IonCol onClick={() => this.setState({ filtro: "papel", openModal: true })}>
                <IonChip>
                  <IonAvatar><img src="./assets/icon/file.png" alt="" /></IonAvatar>
                  <IonLabel> Papel </IonLabel>
                </IonChip>
              </IonCol>
              <IonCol onClick={() => this.setState({ filtro: "plastico", openModal: true })}>
                <IonChip>
                  <IonAvatar><img src="./assets/icon/bottle.png" alt="" /></IonAvatar>
                  <IonLabel> Plástico </IonLabel>
                </IonChip>
              </IonCol>
              <IonCol onClick={() => this.setState({ filtro: "aluminio", openModal: true })}>
                <IonChip>
                  <IonAvatar><img src="./assets/icon/aluminum.png" alt="" /></IonAvatar>
                  <IonLabel> Aluminio </IonLabel>
                </IonChip>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol onClick={() => this.setState({ filtro: "vidrio", openModal: true })}>
                <IonChip>
                  <IonAvatar><img src="./assets/icon/fragile.png" alt="" /></IonAvatar>
                  <IonLabel> Vidrio </IonLabel>
                </IonChip>
              </IonCol>
              <IonCol onClick={() => this.setState({ filtro: "chatarra", openModal: true })}>
                <IonChip>
                  <IonAvatar><img src="./assets/icon/cable-reel.png" alt="" /></IonAvatar>
                  <IonLabel> Chatarra </IonLabel>
                </IonChip>
              </IonCol >
              <IonCol onClick={() => this.setState({ filtro: "carton", openModal: true })}>
                <IonChip>
                  <IonAvatar><img src="./assets/icon/paperboard.png" alt="" /></IonAvatar>
                  <IonLabel> Cartón </IonLabel>
                </IonChip>
              </IonCol>
            </IonRow>
          </IonGrid>
          <IonModal isOpen={this.state.openModal}>
            <IonHeader>
              <IonToolbar color="primary">
                <IonButtons slot="start">
                  <IonButton onClick={() => this.setState({ openModal: false })} shape="round" ><IonIcon icon={arrowBack}></IonIcon></IonButton>
                </IonButtons>
                <IonTitle>Categorías</IonTitle>
              </IonToolbar>
            </IonHeader>
            <ModalCategoria id_categoria={this.state.filtro} usuario_actual={this.state.usuario_actual.slice(1, this.state.usuario_actual.length - 1)}></ModalCategoria>
          </IonModal>
        </IonContent>
      </IonPage>
    )
  }
}

export default Home;















