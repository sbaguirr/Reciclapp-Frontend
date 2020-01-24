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
	IonModal,
	IonGrid,
	IonRow,
	IonCol,
} from '@ionic/react';
import React from 'react';
import MetodosAxios from '../services/MetodosAxios';
import { useState } from 'react';
import SelectOptionCategoria from '../components/SelectOptionCategoria';
import '../theme/Estilo.css';

const VistaProducto: React.FC = () => {
	const [alerta, setAlerta] = useState(false);
	const [incompleto, setIncompleto] = useState(false);
	const [error, setError] = useState(false);
	const [nombre, setNombre] = useState();
	const [imagen, setImagen] = useState();
	const [foto, setFoto] = useState('./assets/icon/cam.png');
	const [descripcion, setDescripcion] = useState();
	const [precio, setPrecio] = useState();
	const [categoria, setCategoria] = useState();
	const [showModal, setShowModal] = useState(false);

	const imagenes =
		[{ src: 'https://i.gyazo.com/0c290535ad676a5ad5cc151b0b6f1871.png', alt: 'Papel' },
		{ src: 'https://i.gyazo.com/985b89811249aa41a535e7de17c80c61.png', alt: 'Cartón' },
		{ src: 'https://i.gyazo.com/1d2b05716e62c021b68a0f1466beb95a.jpg', alt: 'Plástico' },
		{ src: 'https://i.gyazo.com/82528563d24646fee6660c0f45a627b1.png', alt: 'Vidrio' },
		{ src: 'https://i.gyazo.com/95b67998a61ffee1626b4187048e9380.png', alt: 'Madera' },
		{ src: 'https://i.gyazo.com/792a0bd97846eb35fca737edc7348707.png', alt: 'Aluminio' }
		];

	const registrar_objeto = () => {

		if (nombre === undefined || descripcion === undefined
			|| precio === undefined || categoria === undefined) {
			setIncompleto(true);
		} else {

			let registro_objeto = {
				nombre: nombre,
				descripcion: descripcion,
				precio: parseFloat(precio),
				estado: "disponible",
				usuario_id: "sbaguirr@espol.edu.ec",
				categoria_id: parseInt(categoria),
				ruta: imagen
			}
			MetodosAxios.crear_publicacion(registro_objeto).then(res => {
				setAlerta(true);
			}).catch(err => {
				console.log(err);
				setError(true);
			});

		}
	}

	function handleClick(src: any) {
		setImagen(src);
		setFoto(src);
		setShowModal(false);
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
							<img src={foto} alt="Camara" onClick={() => setShowModal(true)} />
						</p>
						<IonModal isOpen={showModal}>
							<IonToolbar color="primary">
								<IonTitle>Elegir Imagen</IonTitle>
							</IonToolbar>
							<IonGrid>
								<IonRow>
									{imagenes.map((img, alt) => {
										return (
											<IonCol size="6" key={alt}>
												<img className="galeria" src={img.src} onClick={() => handleClick(`${img.src}`)} alt={img.alt}></img>
											</IonCol>
										);
									})}

								</IonRow>
							</IonGrid>

						</IonModal>

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
					header={'Se ha publicado con éxito'}
					buttons={['Aceptar']}
				/>
				<IonAlert
					isOpen={incompleto}
					onDidDismiss={() => setIncompleto(false)}
					header={'Debe asegurse de completar todos los campos'}
					buttons={['Aceptar']}
				/>

				<IonAlert
					isOpen={error}
					onDidDismiss={() => setError(false)}
					header={'Se ha producido un error al realizar su solicitud'}
					buttons={['Aceptar']}
				/>

			</IonContent>
		</IonPage >
	);
};

export default VistaProducto;