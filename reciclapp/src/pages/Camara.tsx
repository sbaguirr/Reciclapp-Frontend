import React from 'react';
import { camera} from 'ionicons/icons';
import {
    IonContent, IonHeader, IonPage,
    IonFab, IonFabButton, IonIcon, IonGrid, IonRow,
    IonCol, IonImg
} from '@ionic/react';
import { usePhotoGallery } from './usePhotoGallery';




const Camara: React.FC = () => {
    const { photos, takePhoto } = usePhotoGallery();
    return (
        <IonPage>
            <IonHeader></IonHeader>
            <IonContent>
                <IonGrid>
                    <IonRow>
                        {photos.map((photo, index) => (
                            <IonCol size="6" key={index}>
                                <IonImg src={photo.base64 ?? photo.webviewPath} />
                            </IonCol>
                        ))}
                    </IonRow>
                </IonGrid>
                <IonFab vertical="bottom" horizontal="center" slot="fixed">
                    <IonFabButton onClick={() => takePhoto()}>
                        <IonIcon icon={camera}></IonIcon>
                    </IonFabButton>
                </IonFab>
            </IonContent>

        </IonPage>
    )
}

export default Camara;