import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { AppPage } from './declarations';

import Menu from './components/Menu';
import Home from './pages/Home';
import List from './pages/List';
import InicioSesion from './pages/InicioSesion';
import VistaProducto from './pages/VistaProducto';
import PerfilProducto from './pages/PerfilProducto';
import Perfil from './pages/Perfil';
import SubirImagen from './pages/SubirImagen';
import { home, list } from 'ionicons/icons';

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
import EjemploDefault from './pages/EjemploDefault';
import Camara from './pages/Camara';

const appPages: AppPage[] = [
  {
    title: 'Home',
    url: '/home',
    icon: home
  },
  {
    title: 'List',
    url: '/home/list',
    icon: list
  }
];

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonSplitPane contentId="main">
        <Menu appPages={appPages} />
        <IonRouterOutlet id="main">
          <Route path="/home" component={Home} exact={true} />
          <Route path="/home/list" component={List} exact={true} />
          <Route path="/inicio" component={InicioSesion} exact={true} />
          <Route path="/producto" component={VistaProducto} exact={true} />
          <Route path="/perfil" component={Perfil} exact={true} />
          <Route path="/upload" component={SubirImagen} exact={true} />
          <Route path="/home/ejemplo" component={EjemploDefault} exact={true} />
          <Route path="/home/camara" component={Camara} exact={true} />
          <Route path="/home/perfilproducto" component={PerfilProducto} exact={true} />
          <Route path="/" render={() => <Redirect to="/inicio"/> } exact={true} />
        </IonRouterOutlet>
      </IonSplitPane>
    </IonReactRouter>
  </IonApp>
);

export default App;
