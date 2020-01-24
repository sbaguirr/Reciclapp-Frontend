import { IonContent, IonButton, IonToolbar, IonButtons, IonFooter, IonInput, IonIcon, IonAlert } from '@ionic/react';
import React from 'react';
import '../theme/Estilo.css';
import { send } from 'ionicons/icons';
import Comentario from './Comentario';
import MetodosAxios from '../services/MetodosAxios';

class ModalComentario extends React.Component<any, any>  {
    constructor(props: any) {
        super(props);
        this.state = {
            open: false,
            comentario_usuario: String,
            comentario: String,
            comentario_fecha: String,
            incompleto: false,
            guardado: false,
            error: false,
            data: String,
            comentarios: [] as any
        }
    }

    cargarData() {
        MetodosAxios.mostrar_comentarios(this.props.id_objeto).then(res => {
            this.setState({ comentarios: res.data });
        }).catch(err => {
            this.setState({ error: true });
        });
    }

    componentDidMount = () => {
        this.cargarData();
    }


    comentar() {
        if (this.state.comentario === undefined) {
            this.setState({ incompleto: true });
        } else {
            let json = {
                comentario: this.state.data,
                usuario_id: this.props.usuario_actual.slice(1, this.props.usuario_actual.length - 1),
                objeto_id: parseInt(this.props.id_objeto)
            }
            MetodosAxios.comentar_objeto(json).then(res => {
                this.setState({ guardado: true });
                this.cargarData();
            }).catch(err => {
                console.log(err);
                this.setState({ error: true });
            });

        }
    }



    render() {
        return (
            <>
                <IonContent>
                    {this.state.comentarios.map((dato: any) => {
                        return (
                            <Comentario key={dato.created_at} comentario_usuario={dato.nombre_usuario} comentario={dato.comentario}
                                comentario_fecha={dato.created_at}></Comentario>
                        )
                    })
                    }
                </IonContent>
                <IonAlert
                    isOpen={this.state.guardado}
                    onDidDismiss={() => this.setState({ guardado: false })}
                    header={'Comentario realizado'}
                    buttons={['Aceptar']}
                />
                <IonAlert
                    isOpen={this.state.incompleto}
                    onDidDismiss={() => this.setState({ incompleto: false })}
                    header={'Debes comentar algo'}
                    buttons={['Aceptar']}
                />

                <IonAlert
                    isOpen={this.state.error}
                    onDidDismiss={() => this.setState({ error: false })}
                    header={'Se ha producido un error al realizar su solicitud'}
                    buttons={['Aceptar']}
                />

                <IonFooter>
                    <IonToolbar>
                        <IonInput placeholder="Escribe un comentario"
                            name="comentario" onIonChange={(e) => this.setState({ data: (e.target as HTMLInputElement).value })}></IonInput>
                        <IonButtons slot="primary">
                            <IonButton onClick={() => this.comentar()} color="secondary"><IonIcon icon={send} ></IonIcon></IonButton>
                        </IonButtons>

                    </IonToolbar>
                </IonFooter>
            </>
        )
    }
}
export default ModalComentario;