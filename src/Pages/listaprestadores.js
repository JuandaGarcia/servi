import React from 'react'
import Fondo from '../components/fondo'
import Fichero from '../components/ficherolistaprestadores'

const app = () =>{
    return(
        <div className="contenedor-miservicios">
            
            <div className="miservicios">
                <div className ="misservicios-encabezado">
                    <img src="http://localhost:3000/img/logo.png"/>
                    <input type="text" />
                </div>

                <div className="misservicios-abajo">
                    <h1>
                        Cerrajería
                    </h1>

                    <div className="linea-gris"/>

                    <div className = "rendijas">
                        
                        <Fichero/>
                        <Fichero/>
                        <Fichero/>
                        <Fichero/>
                    </div>
                </div>
            </div>




            <Fondo user={'kevin guerrero'} boton={"servicios solicitados"}/>

        </div>
    )
}

export default app;
