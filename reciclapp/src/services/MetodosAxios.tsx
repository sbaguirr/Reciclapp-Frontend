import axios from 'axios';
export default class MetodosAxios {
    static instanceAxios = axios.create({
        baseURL: 'http://localhost:8000/api',
    });

    static mostrar_perfil = (usuario_id: any) => {
        return MetodosAxios.instanceAxios.get(`mostrar_perfil/${usuario_id}`);
    }

    static ver_mis_publicaciones = (usuario_id: any) => {
        return MetodosAxios.instanceAxios.get(`ver_mis_publicaciones/${usuario_id}`);
    }

    static crear_publicacion = (objetos: any) => {
        return MetodosAxios.instanceAxios.post(`/objetos`, objetos);
      }

      static mostrar_categoria = () => {
        return MetodosAxios.instanceAxios.get(`mostrar_categorias`);
    }
      
}