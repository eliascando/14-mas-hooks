import { useForm } from '../hooks/useForm'

export const MiFormulario = () => {

    const { formulario, guardar, cambiar } = useForm({});

  return (
    <div>
        <h1>Mi formulario</h1>
        <p>Formulario para guardar un curso</p>
        <p>Curso guardado: {formulario.name}</p>
        <pre className='codigo'>{JSON.stringify(formulario)}</pre>
        <form className="mi-formulario" onSubmit={guardar}>
            <input type="text" name="name" onChange={cambiar} placeholder="Nombre del curso" />
            <input type="number" name="date" onChange={cambiar} placeholder="Año de publicacion" />
            <textarea name="description" onChange={cambiar} placeholder="Descripcion del curso" />
            <input type="text" name="author" onChange={cambiar} placeholder="Autor del curso" />
            <input type="email" name="email" onChange={cambiar} placeholder="Email del autor" />
            <input type="submit" value="Guardar curso" />
        </form>
    </div>
  )
}