import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonList, IonListHeader, IonLabel, IonItem, IonIcon } from '@ionic/react';
import { book, build, grid, colorFill } from 'ionicons/icons';

class EjemploDefault extends React.Component<any, any> {
    render() {
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton />
                        </IonButtons>
                        <IonTitle>Home</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonCard className="welcome-card">
                        <img src="/assets/shapes.svg" alt="" />
                        <IonCardHeader>
                            <IonCardSubtitle>Get Started</IonCardSubtitle>
                            <IonCardTitle>Welcome to Ionic</IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>
                            <p>
                                Now that your app has been created, you'll want to start building out features and
                                components. Check out some of the resources below for next steps.
          </p>
                        </IonCardContent>
                    </IonCard>

                    <IonList lines="none">
                        <IonListHeader>
                            <IonLabel>Resources</IonLabel>
                        </IonListHeader>
                        <IonItem href="https://ionicframework.com/docs/" target="_blank">
                            <IonIcon slot="start" color="medium" icon={book} />
                            <IonLabel>Ionic Documentation</IonLabel>
                        </IonItem>
                        <IonItem href="https://ionicframework.com/docs/building/scaffolding" target="_blank">
                            <IonIcon slot="start" color="medium" icon={build} />
                            <IonLabel>Scaffold Out Your App</IonLabel>
                        </IonItem>
                        <IonItem href="https://ionicframework.com/docs/layout/structure" target="_blank">
                            <IonIcon slot="start" color="medium" icon={grid} />
                            <IonLabel>Change Your App Layout</IonLabel>
                        </IonItem>
                        <IonItem href="https://ionicframework.com/docs/theming/basics" target="_blank">
                            <IonIcon slot="start" color="medium" icon={colorFill} />
                            <IonLabel>Theme Your App</IonLabel>
                        </IonItem>
                    </IonList>
                </IonContent>
            </IonPage>
        )

    }


}
export default EjemploDefault;