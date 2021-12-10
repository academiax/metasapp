import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router";
import { Contexto } from "../../servicios/Memoria";
import { actualizarMeta, borrarMeta, crearMeta } from "../../servicios/Pedidos";
import estilos from "./Detalles.module.css";
function Detalles() {

    const { id } = useParams();

    const [form, setForm] = useState({
        detalles: '',
        eventos: 1,
        periodo: 'semana',
        icono: '🏃‍♂️',
        meta: 52,
        plazo: '2030-01-01',
        completado: 0
    });

    const [estado, enviar] = useContext(Contexto);

    const { detalles, eventos, periodo, icono, meta, plazo, completado } = form;

    const onChange = (event, prop) => {
        setForm(estado => ({ ...estado, [prop]: event.target.value }));
    }

    const navegar = useNavigate();

    const metaMemoria = estado.objetos[id];

    useEffect(() => {
        if (!id) return;
        if (!metaMemoria) {
            return navegar('/404');
        }
        setForm(metaMemoria);
    }, [id, metaMemoria, navegar]);

    const crear = async () => {
        const nuevaMeta = await crearMeta(form);
        enviar({ tipo: 'crear', meta: nuevaMeta });
        navegar('/lista');
    }

    const actualizar = async  () => {
        const metaActualizada = await actualizarMeta(form);
        enviar({ tipo: 'actualizar', meta: metaActualizada });
        navegar('/lista');
    }

    const borrar = async () => {
        await borrarMeta(form.id);
        enviar({ tipo: 'borrar', id: form.id });
        navegar('/lista');
    }

    const cancelar = () => {
        navegar('/lista');
    }

    const frecuencias = ["día", "semana", "mes", "año"];
    const iconos = ["💻", "🏃‍♂️", "📚", "✈️", "💵"];

    return (
        <div className="tarjeta">
            <form className="p-4">
                <label className="label">
                    Describe tu meta
                    <input
                        className="input"
                        placeholder="ej. 52 caminatas"
                        value={detalles}
                        onChange={e => onChange(e, 'detalles')}
                    />
                </label>
                <label className="label">
                    ¿Con que frecuencia deseas cumplir tu meta? <span>(ej. 1 vez a la semana)</span>
                    <div className="flex mb-6">
                        <input
                            type="number"
                            className="input mr-6"
                            value={eventos}
                            onChange={e => onChange(e, 'eventos')}
                        />
                        <select
                            className="input"
                            value={periodo}
                            onChange={e => onChange(e, 'periodo')}
                        >
                            {frecuencias.map(opcion => <option key={opcion} value={opcion}>{opcion}</option>)}
                        </select>
                    </div>
                </label>
                <label className="label">
                    ¿Cuantas veces deseas completar esta meta?
                    <input
                        type="number"
                        className="input"
                        value={meta}
                        onChange={e => onChange(e, 'meta')}
                    />
                </label>
                <label className="label">
                    ¿Tienes una fecha límite?
                    <input
                        type="date"
                        className="input"
                        value={plazo}
                        onChange={e => onChange(e, 'plazo')}
                    />
                </label>
                <label className="label">
                    ¿Cuantas veces haz completado ya esta meta?
                    <input
                        type="number"
                        className="input"
                        value={completado}
                        onChange={e => onChange(e, 'completado')}
                    />
                </label>
                <label className="label">
                    Escoge el icono para la meta
                    <select
                        className="input"
                        value={icono}
                        onChange={e => onChange(e, 'icono')}
                    >
                        {iconos.map(opcion => <option key={opcion} value={opcion}>{opcion}</option>)}
                    </select>
                </label>
            </form>
            <div className={estilos.botones}>
                {!id && <button
                    className="boton boton--negro"
                    onClick={crear}
                >Crear</button>}
                {id && <button
                    className="boton boton--negro"
                    onClick={actualizar}
                >Actualizar</button>}
                {id && <button
                    className="boton boton--rojo"
                    onClick={borrar}
                >Borrar</button>}
                <button
                    className="boton boton--gris"
                    onClick={cancelar}
                >Cancelar</button>
            </div>
        </div>
    );
}

export default Detalles;