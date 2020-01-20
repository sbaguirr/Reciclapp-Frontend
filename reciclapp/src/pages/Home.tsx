import {
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonMenuButton,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonFab,
  IonFabButton
} from '@ionic/react';
import React from 'react';
import { bookmark,create,time,contact} from 'ionicons/icons';

class Home extends React.Component<any, any> {

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
          <IonCard>
          <img src="./assets/icon/plastico.jpg" alt="publicacion"/>
            <IonCardHeader>
              <IonCardSubtitle> $ 1.00 </IonCardSubtitle>
              <IonCardTitle> Botellas plásticas </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              Botellas de plástico de detergentes varios colores
                    <IonGrid>
                <IonRow>
                  <IonCol>
                    <IonIcon icon={time}></IonIcon>
                    2020-01-10
                  </IonCol>
                  <IonCol>
                    <IonIcon icon={bookmark}></IonIcon>
                    plástico
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCardContent>
          </IonCard>

          <IonFab vertical="bottom" horizontal="end" slot="fixed" color="secondary">
            <IonFabButton href="/producto">
              <IonIcon icon={create}></IonIcon>
            </IonFabButton>
          </IonFab>
          <IonTitle >Categorias populares</IonTitle>
          <IonGrid>
      <IonRow>
        <IonCol  > <IonButton color="light" expand="block"> Papel </IonButton></IonCol>
        <IonCol  ><IonButton  color="light"  expand="block">Plástico </IonButton></IonCol>
        </IonRow>
                <IonRow>
        <IonCol  > <IonButton  color="light"  expand="block">Aluminio </IonButton></IonCol>
        <IonCol  ><IonButton  color="light" expand="block">Vidrio </IonButton></IonCol>
        </IonRow>
        <IonRow>
        <IonCol  > <IonButton  color="light"  expand="block">Chatarra </IonButton></IonCol>
        <IonCol  ><IonButton  color="light" expand="block">Cartón </IonButton></IonCol>
        </IonRow>
        </IonGrid>
        </IonContent>



      </IonPage>
    )
  }
}

export default Home;















