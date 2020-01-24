import { IonContent, IonHeader, IonLabel, IonPage, IonTitle, IonInput, IonList, IonButton, IonToolbar, IonItem, IonAlert
} from '@ionic/react';
import React, { useState, useEffect } from 'react';
import MetodosAxios from '../services/MetodosAxios';
import RedireccionUser from '../services/RedireccionUser';
import { useHistory } from "react-router-dom";

interface Usuario {
  user: any,
  pass: any, 
  usuarios: any,
};

const InicioSesion: React.FC = () => {
    const history = useHistory();
    const [user, setUser] = useState();
    const [pass, setPass] = useState();
    const [usuarios, setUsuarios] = useState([] as any);
    const [incompleto, setIncompleto] = useState(false);  
    const [alerta, setAlerta] = useState(false);
    const [error, setError] = useState(false);

   useEffect(() => {
     MetodosAxios.usuarios().then(res => {
       console.log("efewefwef: ", res.data);
       setUsuarios(res.data); });    
   }, []);

  const registrar = () => {
    for (let u of usuarios){
      if(user === u.usuario_id && pass === u.contrasena){
        console.log("gtrgf: ",u.nombre_usuario, u.contrasena);
        console.log("ok");
        RedireccionUser.redirectLogin(history);
        localStorage.setItem('user', JSON.stringify(user));
        console.log('localStorage', localStorage)
      } 
      // else if ((user != u.usuario_id || pass != u.contrasena)){
      //   setError(true);
      // }
    }
  }

  return(
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <p className="ion-text-center">
          <img src="./assets/icon/logo.png" alt="Reciclaje" />
          <IonTitle className="ion-text-center">Reciclapp</IonTitle>
        </p>
        <form onSubmit={(e) => { e.preventDefault(); registrar(); }} action="post">   
          <IonList>   
            <IonItem>
              <IonLabel position="stacked" color="dark">Usuario</IonLabel>
              <IonInput required type="text" placeholder="Nombre de usuario" name="user" value={user} onIonChange={(e) => setUser((e.target as HTMLInputElement).value)}></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked" color="dark">Contraseña</IonLabel>
              <IonInput required type="password" name="pass" value={pass} onIonChange={(e) => setPass((e.target as HTMLInputElement).value)}></IonInput>   
            </IonItem> 
            <p className="ion-text-center">
              <IonButton color="primary" type="submit">Iniciar Sesión</IonButton>
              {/* href="/home"   onClick={() => console.log(user, pass)} */}
            </p>   
          </IonList>
        </form>
        <IonAlert
          isOpen={alerta}
          onDidDismiss={() => setAlerta(false)}
          header={'Guardado con éxito'}
          message={'Se ha guardado exitosamente el Router'}
          buttons={['Aceptar']}
        />
        <IonAlert
          isOpen={incompleto}
          onDidDismiss={() => setIncompleto(false)}
          header={'Debe asegurse de completar todos los campos'}
          message={'colocar imagen'}
          buttons={['Aceptar']}
        />
        <IonAlert
          isOpen={error}
          onDidDismiss={() => setError(false)}
          header={'¡Nombre de usuario o contraseña incorectos!'}
          message={'Asegurese ingresar datos correctos'}
          buttons={['Aceptar']}
        /> 
      </IonContent>
    </IonPage>
  )
}

export default InicioSesion;
