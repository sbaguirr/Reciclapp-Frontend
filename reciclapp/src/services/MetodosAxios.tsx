import axios from 'axios';
export default class MetodosAxios {
    static instanceAxios = axios.create({
        baseURL: 'https://reciclappback.herokuapp.com/api',
    });

    static mostrar_perfil = (usuario_id: any) => {
        return MetodosAxios.instanceAxios.get(`mostrar_perfil/${usuario_id}`);
    }

    static ver_mis_publicaciones = (usuario_id: any) => {
        return MetodosAxios.instanceAxios.get(`ver_mis_publicaciones/${usuario_id}`);
    }

    static usuarios = () => {
        return MetodosAxios.instanceAxios.get(`usuarios`);
    }
    
    static ver_publicaciones_otros = (usuario_id: any) => {
        return MetodosAxios.instanceAxios.get(`ver_publicaciones_otros/${usuario_id}`);
    }

    static mostrar_objetos_por_categoria = (categoria: any) => {
        return MetodosAxios.instanceAxios.get(`mostrar_objetos_por_categoria/${categoria}`);
    }

    static crear_publicacion = (objetos: any) => {
        return MetodosAxios.instanceAxios.post(`/objetos`, objetos);
      }

    static categorias = () => {
        return MetodosAxios.instanceAxios.get(`categorias`);
    }
      
}