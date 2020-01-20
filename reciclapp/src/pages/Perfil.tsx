import {
  IonButtons,
  IonHeader,
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
  IonBackButton,
  IonInput
  //  IonIcon,
} from '@ionic/react';
//import { bookmarks } from 'ionicons/icons';
import React from 'react';
import MetodosAxios from '../services/MetodosAxios';
import Publicacion from '../components/Publicacion';

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
    MetodosAxios.mostrar_perfil("sbaguirr@espol.edu.ec").then(res => {
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


    MetodosAxios.ver_mis_publicaciones("sbaguirr@espol.edu.ec").then(res => {
      if (res.data.length === 0) {
        console.log("nai");
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
              <IonBackButton defaultHref="/home" />
            </IonButtons>
            <IonTitle>Perfil</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <p className="ion-text-center">
            <img src="./assets/icon/user.png" alt="Foto del Usuario" />
          </p>
          <IonList>
            <IonItem>
              <IonTitle class="ion-text-start" >Información sobre {this.state.nombreUsuario}</IonTitle>
            </IonItem>
          </IonList>
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
          <IonList>
            <IonItem>
              <IonTitle class="ion-text-start">Publicaciones realizadas</IonTitle>
            </IonItem>
            {
               this.state.publicaciones.map((dato: any) => {
                return (
                  <Publicacion key={dato.objeto_id} nombre={dato.titulo} imagen={dato.ruta}
                   descripcion={dato.descripcion} precio={dato.precio} fecha_publicacion={dato.fecha_publicacion} categoria={dato.categoria}/>
                )
              })
              }
          </IonList>
        </IonContent>
      </IonPage>
    )
  }

}
export default Perfil;