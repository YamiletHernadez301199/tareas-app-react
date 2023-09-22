//componente
/*
Funcion normal 

function App() {
     return <h1>Hola Mundo Desde React</h1>
}
*/
import { useEffect, useReducer, useState } from "react"
// import { useReducer } from "react";
import { Footer } from "./components/Header/Footer/Footer"
import { FormularioTareas } from "./components/Header/FormularioTarea/FormularioTareas"
import { Header } from "./components/Header/Header"
import { Tareas } from "./components/Tareas/Tareas"
import { tareaReduce } from "./reducers/tareaReduce"

//Funcion flecha
// const App = () => {
//     return <h1>Hola Mundo Desde React</h1>  
// };
//exportamos nuestro componente
// export default App;


export const App = () => {
    // const init = () => {
    //     return [
    //         {
    //             id: 1,
    //             descripcion: "Estudiar",
    //             realizado: false
    //         },
    //         {
    //             id: 2,
    //             descripcion: "React",
    //             realizado: false
    //         },{
    //             id: 3,
    //             descripcion: "ejemplo",
    //             realizado: false 
    //         }
    //     ]
        
    // }
    const init = () => {
        return JSON.parse(localStorage.getItem("tareas")) || []
    }

    const [state, dispatch] = useReducer(tareaReduce, [], init)
    
    const [descripcion, setDescipcion] = useState("")

    useEffect(() => {
        localStorage.setItem("tareas", JSON.stringify(state))
    }, [state])

    const handleInputChange = (evento) => {
        setDescipcion(evento.target.value)
        console.log(descripcion)
    }
    const handleSubmit = (evento) => {
        evento.preventDefault();
        const tareaNueva = {
            id: new Date().getTime(),
            descripcion: descripcion,
            realizado: false
        }
        const action = {
            type:"agregar",
            payload: tareaNueva
        }
        dispatch(action)
        setDescipcion("")
    }


    const handelCambiar = (id) => {
        dispatch({
            type: "cambiar",
            payload: id
        })

    }
    const handelEliminar = (id) => {
        dispatch({
            type: "borrar",
            payload: id
        })

    }
    // console.log(state)
    let terminadas = 0;
    for (let i = 0; i < state.length; i++) {
        if (state[i].realizado === true) {
            terminadas++;
        }

    }
    let porcentaje = terminadas / state.length
    // console.log(porcentaje)
    // const tareas = ["Estudiar react", "ver tele", "Terminar apuntes", "Hacer tarea de Cross", "Hacer Maqueta de Flutter", "Hacer Hola Mundo"]
    return (
        <>
            <Header />
            {/* <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>Hola Mundo Desde React</h1>  
                    </div>
                    
                </div>
            </div> */}
            <div className="container">
                <div className="row">
                    <div className="col-6 text-center p-0 d-flex justify-content-center">
                        <FormularioTareas descripcion={descripcion} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
                    </div>
                    <div className="col-6 d-flex justify-content-center p-0">
                        <div className="row row-cols-1 row-cols-md-2 g-4 ">
                            {
                                state.map((tarea, index) => {
                                    return (

                                        <Tareas key={index} handelCambiar={handelCambiar} handelEliminar={handelEliminar} tarea={tarea} id={tarea.id} index={index} />

                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Footer porcentaje={porcentaje} />
        </>
    )
};