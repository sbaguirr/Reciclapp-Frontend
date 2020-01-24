import { IonContent, IonList, IonItem} from '@ionic/react';
import React from 'react';
import MetodosAxios from '../services/MetodosAxios';
import Publicacion from './Publicacion';



class ModalCategoria extends React.Component<any, any>  {
    constructor(props: any) {
        super(props);
        this.state = {
            publicaciones: [] as any
        }
    }


    componentDidMount = () => {
        console.log(this.props.id_categoria);
        MetodosAxios.mostrar_objetos_por_categoria(this.props.id_categoria).then(res => {
            this.setState({ publicaciones: res.data });
            
        }).catch(err => {
            this.setState({ error: true });
        });
    }


    render() {
        return (
            <IonContent>
                <IonList>
                    {this.state.publicaciones.map((dato: any) => {
                        return (
                            <IonItem>
                                <Publicacion key={dato.objeto_id} id_objeto={dato.objeto_id} vendedor={dato.nombre_usuario} nombre={dato.titulo} imagen={dato.ruta}
                                    descripcion={dato.descripcion} estado={dato.estado} precio={dato.precio}
                                    fecha_publicacion={dato.created_at} categoria={dato.categoria} usuario_actual={this.props.usuario_actual} />
                            </IonItem>
                        )
                    })
                    }
                </IonList>
            </IonContent>
        );
    }
};


export default ModalCategoria;
