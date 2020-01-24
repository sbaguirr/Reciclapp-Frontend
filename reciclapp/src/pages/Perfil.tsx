import {
  IonButtons, IonHeader, IonPage, IonTitle, IonToolbar, IonBackButton
} from '@ionic/react';
import React from 'react';
import MetodosAxios from '../services/MetodosAxios';
import InformacionPerfil from '../components/InformacionPerfil';

interface Usuario {
  nombres: any,
  apellidos: any,
  ciudad: any,
  direccion: any,
  telefono: any,
  nombreUsuario: any
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
      nombreUsuario: String
    }
  }

  componentDidMount = () => {
    let nom: String, ape: String, cit: String, dir: String, tel: String, user: String;
    let username: String = localStorage.user;
    MetodosAxios.mostrar_perfil(username.slice(1, username.length - 1)).then(res => {
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
        <InformacionPerfil nombreUsuario={this.state.nombreUsuario} nombres={this.state.nombres} apellidos={this.state.apellidos}
        ciudad={this.state.ciudad} direccion={this.state.direccion} telefono={this.state.telefono}
        ></InformacionPerfil>
      </IonPage>
    )
  }
}

export default Perfil;