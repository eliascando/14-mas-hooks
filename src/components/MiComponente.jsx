import { useId } from "react";

export const MiComponente = () => {

    const ID = useId();
    const ID2 = useId();
    const ID3 = useId();
    const ID4 = useId();

    console.log(ID);
    console.log(ID2);
    console.log(ID3);
    console.log(ID4);

  return (
    <div>
        <h1>Hook useID</h1>
        <input id={ID} name="nombre" placeholder="Escribe tu nombre" />
    </div>
  )
}