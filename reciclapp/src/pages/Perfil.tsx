import {
  IonButtons, IonHeader, IonPage, IonTitle, IonToolbar, IonBackButton
} from '@ionic/react';
import React from 'react';
import MetodosAxios from '../services/MetodosAxios';
import InformacionPerfil from '../components/InformacionPerfil';
/*
interface Usuario {
  nombres: any,
  apellidos: any,
  ciudad: any,
  direccion: any,
  telefono: any,
  nombreUsuario: any,
  data: any
};*/

class Perfil extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      data: [] as any
    }
  }

  componentDidMount = () => {

    /*let nom: String, ape: String, cit: String, dir: String, tel: String, user: String; */
    let username: String = localStorage.user;
    MetodosAxios.mostrar_perfil(username.slice(1, username.length - 1)).then(res => {
      this.setState({ data: res.data })
      /*
      this.setState({ nombres: nom });
      this.setState({ apellidos: ape });
      this.setState({ ciudad: cit });
      this.setState({ direccion: dir });
      this.setState({ telefono: tel });
      this.setState({ nombreUsuario: user });*/
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
        {this.state.data.map((dato: any) => {
          return (
            <InformacionPerfil key={dato.usuario_id} nombreUsuario={dato.nombre_usuario} nombres={dato.nombres} apellidos={dato.apellidos}
              ciudad={dato.ciudad} direccion={dato.direccion} telefono={dato.telefono}
            ></InformacionPerfil>
          )
        })}
      </IonPage>
    )
  }
}

export default Perfil;