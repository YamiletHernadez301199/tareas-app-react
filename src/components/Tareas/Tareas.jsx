// import { useState } from "react"
export const Tareas = ({ tarea, index, handelCambiar, handelEliminar, id }) => {
  //Toda la logica de un componente va a antes del return
  // const [state, setState] = useState(false)

  // const clickHandler = () =>{
  //   setState(!state)
  // }


  return (
    <>
      {/* card text-bg-secondary rounded-5 shadow-lg*/}
      <div className="card-group">
        <div className={tarea.realizado ? "card bg-success" : "card bg-light"} style={{ width: "16rem" }}>
          <div className="card-body">
            <div className="">
              <h3 className="cartd-text">
                Tarea : {index + 1}
              </h3>
              <p className="cartd-text">{tarea.descripcion}</p>
              <hr />
            </div>
            {/* gab-2 nos da el espacio entre dos componentes */}
            <div className="d-grid gap-2">
              <button onClick={() => handelEliminar(id)} className="btn btn-danger border border-light-subtle" type="button">Borrar</button>
              <button onClick={() => handelCambiar(id)} className="btn btn-info border border-light-subtle" type="button">{tarea.realizado ? "Marcar como inconclusa" : "Marcar como termina"}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
