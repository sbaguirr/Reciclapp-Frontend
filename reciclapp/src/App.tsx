import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { AppPage } from './declarations';

import Menu from './components/Menu';
import Home from './pages/Home';
import InicioSesion from './pages/InicioSesion';
import VistaProducto from './pages/VistaProducto';
import PerfilProducto from './pages/PerfilProducto';
import Perfil from './pages/Perfil';
import MisPublicaciones from './pages/MisPublicaciones';
import Categorias from './pages/Categorias';
import SubirImagen from './pages/SubirImagen';
import { home, list, person, logOut } from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const appPages: AppPage[] = [
  {
    title: 'Principal',
    url: '/home',
    icon: home
  },{
    title: 'Mi perfil',
    url: '/perfil',
    icon: person
  },
  {
    title: 'Mis publicaciones',
    url: '/publicaciones',
    icon: list
  },
  {
    title: 'Cerrar sesión',
    url: '/inicio',
    icon: logOut
  }
];

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonSplitPane contentId="main">
        <Menu appPages={appPages} />
        <IonRouterOutlet id="main">
          <Route path="/home" component={Home} exact={true} />
          <Route path="/inicio" component={InicioSesion} exact={true} />
          <Route path="/producto" component={VistaProducto} exact={true} />
          <Route path="/perfil" component={Perfil} exact={true} />
          <Route path="/publicaciones" component={MisPublicaciones} exact={true} />
          <Route path="/categorias" component={Categorias} exact={true} />
          <Route path="/upload" component={SubirImagen} exact={true} />
          <Route path="/home/perfilproducto" component={PerfilProducto} exact={true} />
          <Route path="/" render={() => <Redirect to="/inicio"/> } exact={true} />
        </IonRouterOutlet>
      </IonSplitPane>
    </IonReactRouter>
  </IonApp>
);

export default App;
