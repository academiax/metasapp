import { useContext } from "react";
import { Outlet } from "react-router";
import { Contexto } from "../../servicios/Memoria";
import Meta from "./Meta";

function Lista() {

    const [estado] = useContext(Contexto);

    return (
        <>
            {estado.orden.map(id => <Meta key={id} {...estado.objetos[id]}></Meta>)}
            <Outlet />
        </>
    );
}

export default Lista;