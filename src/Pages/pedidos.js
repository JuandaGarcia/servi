import React from 'react'
import Fondo from '../components/fondo'
import FicheroS from '../components/ficheropedidos'

const app = ()=>{
    return (
        <div className= "contenedor-miservicios">
        
            <div className="miservicios">
                <div className ="misservicios-encabezado">
                    <img src="http://localhost:3000/img/logo.png"/>
                    <input type="text" />
                </div>

                <div className="misservicios-abajo">
                    <h1>
                        Pedidos
                    </h1>

                    <div className="linea-gris"/>

                    <div className = "rendijasSS">
                        
                        <FicheroS/>
                        <FicheroS/>
                        <FicheroS/>
                    </div>
                </div>
            </div>


        <Fondo user={'kevin guerrero'} boton={'pedidos'} />

        </div>
    )
}

export default app;