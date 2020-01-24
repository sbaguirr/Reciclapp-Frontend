import { IonSelectOption } from '@ionic/react';
import MetodosAxios from '../services/MetodosAxios';
import React, { useState, useEffect } from 'react';


const SelectOptionCategoria: React.FC = () => {
    
    const [categoria, setCategoria] = useState([] as any);


    useEffect(() => {
        MetodosAxios.categorias().then(res => {
            setCategoria(res.data); });
            
    }, []);

    return (
        <>
            {categoria.map((dato: any) => {
                return (
                    <IonSelectOption key={dato.categoria_id} value={dato.categoria_id}>{dato.tipo}</IonSelectOption>
                )
            })
            }
        </>
    );

};
export default SelectOptionCategoria;