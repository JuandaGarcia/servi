import React from 'react'
import FicheroS from '../components/ficheromiservicio'
import Fondo from '../components/fondo'
const servicio =  () =>{
    return (
        <div className= "contenedor-miservicios">
            <div className="miservicios">

                <div className ="misservicios-encabezado">
                    <img src="http://localhost:3000/img/logo.png"/>

                    <input type="text" />

                    
                    

                </div>

                <div className="misservicios-abajo">
                    <h1>
                        Mis Servicios
                    </h1>

                    <div className="linea-gris"/>

                    <div className = "rendijasS">
                        <FicheroS/>
                        <FicheroS/>
                        <FicheroS/>
                        <FicheroS/>

                    </div>
                </div>
            </div>


           <Fondo boton={"pedidos"} user={"Kevin Guerrero"}/>

        </div>
        
    )
}

export default servicio;


