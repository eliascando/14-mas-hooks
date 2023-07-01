import { useState, useEffect } from "react";

export const useAjax = (url) => {
    const [estado, setEstado] = useState({
        datos: null,
        cargando: true,
    });

    const getData = async() => {
        setEstado({
            ...estado,
            cargando: false,
        });

        const resp = await fetch(url);
        const {data} = await resp.json();

        setEstado({
            datos: data, 
            cargando:false
        });
    };
    
    useEffect(()=>{
        getData();
    },[url]);

    return {
        datos: estado.datos,
        cargando: estado.cargando
    };
};