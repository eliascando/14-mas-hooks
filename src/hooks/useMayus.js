import { useState } from "react";

export const useMayus = (texto) => {

    const [miTexto, setMiTexto] = useState(texto);

    const mayus = () => {
        setMiTexto(texto.toUpperCase());
    }

    const minus = () => {
        setMiTexto(texto.toLowerCase());
    }

    const concatenar = (added) => {
        setMiTexto(texto + added);
    }

    return {
        estado: miTexto,
        mayus,
        minus,
        concatenar
    };
};