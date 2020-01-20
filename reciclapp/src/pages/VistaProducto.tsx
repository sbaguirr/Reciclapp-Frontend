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
	IonInput,
	IonSelect,
	IonTextarea,
	IonText,
	IonButton,
	IonAlert,
} from '@ionic/react';
import React from 'react';
import MetodosAxios from '../services/MetodosAxios';
import { useState } from 'react';
import SelectOptionCategoria from '../components/SelectOptionCategoria';

const VistaProducto: React.FC = () => {
	const [alerta, setAlerta] = useState(false);
	const [incompleto, setIncompleto] = useState(false);
	const [error, setError] = useState(false);
	const [nombre, setNombre] = useState();
//	const [imagen, setImagen] = useState();
	const [descripcion, setDescripcion] = useState();
	const [precio, setPrecio] = useState();
	const [categoria, setCategoria] = useState();


	const registrar_objeto = () => {
	
		if (nombre === undefined || descripcion === undefined
			|| precio === undefined || categoria === undefined) {
			setIncompleto(true);
		} else {
			
	
		let date: any= "2020-01-19";  
			let registro_objeto = {
				nombre: nombre,
				descripcion: descripcion,
				precio: parseFloat(precio),
				fecha_publicacion: date,
				estado: "disponible",
				usuario_id: "sbaguirr@espol.edu.ec",
				categoria_id: parseInt(categoria)
			}
			MetodosAxios.crear_publicacion(registro_objeto).then(res => {
				setAlerta(true);
			}).catch(err => {
				console.log(err);
				setError(true);
			});

		}
	}

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar color="primary">
					<IonButtons slot="start">
						<IonBackButton defaultHref="/home" />
						<IonButtons slot="end">
              <IonButton routerLink="/perfil"></IonButton>
            </IonButtons>
					</IonButtons>
					<IonTitle>Nueva publicación</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent className="ion-padding">

				<form onSubmit={(e) => { e.preventDefault(); registrar_objeto(); }} action="post">
					<IonList>
					<p className="ion-text-center">
						<img src="./assets/icon/cam.png" alt="Camara" />
					</p>
						<IonItem >
							<IonLabel position="stacked">Nombre del producto<IonText color="danger">*</IonText></IonLabel>
							<IonInput className="ion-margin-top" placeholder="Nombre del producto" name="nombre" value={nombre} onIonChange={(e) => setNombre((e.target as HTMLInputElement).value)}></IonInput>
						</IonItem>
						<IonItem>
							<IonLabel position="stacked">Descripcion<IonText color="danger">*</IonText></IonLabel>
							<IonTextarea className="ion-margin-top" name="descripcion" value={descripcion} onIonChange={(e) => setDescripcion((e.target as HTMLInputElement).value)}></IonTextarea>
						</IonItem>
						<IonItem>
							<IonLabel position="stacked">Precio<IonText color="danger">*</IonText></IonLabel>
							<IonInput className="ion-margin-top" name="precio" value={precio} onIonChange={(e) => setPrecio((e.target as HTMLInputElement).value)}></IonInput>
						</IonItem>
						<IonItem>
							<IonLabel position="stacked">Categoría<IonText color="danger">*</IonText></IonLabel>
							<IonSelect className="ion-margin-top" name="categoria" value={categoria} onIonChange={(e) => setCategoria(e.detail.value)} okText="Ok" cancelText="Cancelar">
								<SelectOptionCategoria />
							</IonSelect>
						</IonItem>
					</IonList>
					<p className="ion-text-center">
						<IonButton color="secondary" type="submit">Publicar</IonButton>
					</p>

				</form>
				<IonAlert
					isOpen={alerta}
					onDidDismiss={() => setAlerta(false)}
					header={'Guardado con éxito'}
					message={'colocar imagen'}
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
					header={'Se ha producido un error al realizar su solicitud'}
					message={'Intentelo nuevamente en unos minutos'}
					buttons={['Aceptar']}
				/>

			</IonContent>
		</IonPage >
	);
};

export default VistaProducto;