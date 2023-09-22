export const FormularioTareas = ({ descripcion, handleInputChange, handleSubmit }) => {
  return (
      <>
        {/* b5-form-text */}
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="card text-bg-secondary rounded-5 shadow-lg" style={{ width: "25rem" }}>
                <div className="card-body">
                  <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="mb-3">
                      <h3>
                        Agregar Tarea
                      </h3>
                      <hr />
                      <label htmlFor="tareaInput" className="form-label">Descripción</label>
                      <input onChange={(e) => handleInputChange(e)} value={descripcion} type="text" className="form-control" id="tareaInput" aria-describedby="descripcionText" />
                      <div id="descripcionText" className="form-text">Ingresa la nueva tarea</div>
                    </div>
                    {/* con d-grid abarca todo */}
                    <div className="d-grid gap-2 mx-auto">
                      <button type="submit" className="btn btn-primary border border-light-subtle">Agregar</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

      </>
  )
}
export default FormularioTareas