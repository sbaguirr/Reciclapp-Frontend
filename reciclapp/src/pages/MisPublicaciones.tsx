import { IonButtons, IonHeader, IonContent, IonList, IonPage, IonTitle, IonToolbar, IonBackButton } from '@ionic/react';
import React from 'react';
import MetodosAxios from '../services/MetodosAxios';
import Publicacion from '../components/Publicacion';

interface IMisPublicaciones {
  mis_publicaciones: any;
  usuario_actual:any
};


class MisPublicaciones extends React.Component<any, IMisPublicaciones> {

  constructor(props: any) {
    super(props);
    this.state = {
      mis_publicaciones: [] as any,
      usuario_actual: localStorage.user
    }
  }

  componentDidMount = () => {
   // let username: String = localStorage.user; username.slice(1, username.length-1)
    MetodosAxios.ver_mis_publicaciones(this.state.usuario_actual.slice(1,this.state.usuario_actual.length-1)).then(res => {
      if (res.data.length === 0) {
        console.log("nai");
      } else {
        this.setState({ mis_publicaciones: res.data });
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
            <IonTitle>Mis publicaciones</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">              
          <IonList>
            <IonTitle class="ion-text-start" color="secondary">Publicaciones realizadas</IonTitle>
            {
              this.state.mis_publicaciones.map((dato: any) => {
                return (
                  <Publicacion key={dato.objeto_id} id_objeto={dato.objeto_id} nombre={dato.titulo} imagen={dato.ruta}
                  descripcion={dato.descripcion} estado={dato.estado} precio={dato.precio} fecha_publicacion={dato.created_at}
                  categoria={dato.categoria} usuario_actual={this.state.usuario_actual}/>
                )
              })
            }
          </IonList>
        </IonContent>
      </IonPage>
    )
  }
}

export default MisPublicaciones;