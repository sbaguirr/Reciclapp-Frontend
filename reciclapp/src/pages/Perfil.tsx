import { IonButtons, IonHeader, IonContent, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar, IonBackButton, 
  IonInput } from '@ionic/react';
import React from 'react';
import MetodosAxios from '../services/MetodosAxios';

interface Usuario {
  nombres: any,
  apellidos: any,
  ciudad: any,
  direccion: any,
  telefono: any,
  nombreUsuario: any,
  publicaciones: any
};

class Perfil extends React.Component<any, Usuario> {

  constructor(props: any) {
    super(props);
    this.state = {
      nombres: String,
      apellidos: String,
      ciudad: String,
      direccion: String,
      telefono: String,
      nombreUsuario: String,
      publicaciones: [] as any
    }
  }

  componentDidMount = () => {
    let nom: String, ape: String, cit: String, dir: String, tel: String, user: String;
    let username: String = localStorage.user;
    
    MetodosAxios.mostrar_perfil(username.slice(1, username.length-1)).then(res => {
      res.data.forEach(function (d: any) {
        user = d.nombre_usuario;
        nom = d.nombres;
        ape = d.apellidos;
        cit = d.ciudad;
        cit = d.ciudad;
        dir = d.direccion;
        tel = d.telefono;
      });
      this.setState({ nombres: nom });
      this.setState({ apellidos: ape });
      this.setState({ ciudad: cit });
      this.setState({ direccion: dir });
      this.setState({ telefono: tel });
      this.setState({ nombreUsuario: user });
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
              <IonBackButton defaultHref="/home" />
            </IonButtons>
            <IonTitle>Perfil</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <p className="ion-text-center">
            <img src="./assets/icon/user.png" alt="Foto del Usuario" />
          </p>
          <IonTitle class="ion-text-start" >Información sobre {this.state.nombreUsuario}</IonTitle>    
          <IonList>
            <IonItem>
              <IonLabel position="stacked" >Nombres</IonLabel>
              <IonInput className="ion-margin-top">{this.state.nombres} </IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked" >Apellidos</IonLabel>
              <IonInput className="ion-margin-top">{this.state.apellidos}</IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked" >Ciudad</IonLabel>
              <IonInput className="ion-margin-top">{this.state.ciudad}</IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked" >Direccion</IonLabel>
              <IonInput className="ion-margin-top">{this.state.direccion}</IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Telefonos</IonLabel>
              <IonInput className="ion-margin-top">{this.state.telefono}</IonInput>
            </IonItem>
          </IonList>
        </IonContent>
      </IonPage>
    )
  }
}

export default Perfil;