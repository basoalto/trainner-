import React from "react";
import Buscar from '../ui/Buscar';
import Navegacion from './Navegacion';
import link from 'next/link'
const header = () => {
    return (
        <header>
            <div>
                <div>
                    <p>GO</p>
                    <Buscar/>
                    <Navegacion/>
                </div>
                <div>
                    <p></p>
                    <p>nombre: </p>
                    
                </div>
            </div>
        </header>
    );
}

export default header 