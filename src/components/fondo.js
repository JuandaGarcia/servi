import React from 'react'

const app = (props) =>{
    return(
        <div className="fondo-azul">

        <div className="nombre-imagen">
            <h1>
                {props.user}
            </h1>
            <img src="http://localhost:3000/img/nairo.jpg" alt="" />
        </div>
        

        <img className="img-correr" src="http://localhost:3000/img/corre.png" alt=""/>

        <div className="boton-h1">
            <button>
                {props.boton}
            </button>
        </div>

        <div className="boton-h1">
            <h1>
                4:25 pm
            </h1>
        </div>
        
    </div>
    )
}

export default app;