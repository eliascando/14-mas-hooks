import { useMayus } from "../hooks/useMayus";

export const PruebasCustom = () => {

    const { estado, mayus, minus, concatenar} = useMayus('hola');

  return (
    <>
        <h1>Probando componentes personalizados</h1>
        <h2>{estado}</h2>

        <button onClick={ mayus }>Poner en mayusculas</button>
        <button onClick={ minus }>Poner en minusculas</button>
        <button onClick={ () => concatenar(' - concatenado') }>Concatenar</button>
    </>
  )
}