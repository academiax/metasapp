function Detalles() {
    const frecuencias = ["día", "semana", "mes", "año"];
    const iconos = ["💻", "🏃‍♂️", "📚", "✈️", "💵"];

    return (
        <div>
            <form>
                <label>
                    Describe tu meta
                    <input placeholder="ej. 52 caminatas" />
                </label>
                <label>
                    ¿Con que frecuencia deseas cumplir tu meta? <span>(ej. 1 vez a la semana)</span>
                    <div>
                        <input type="number" />
                        <select>
                            {frecuencias.map(opcion => <option value={opcion}>{opcion}</option>)}
                        </select>
                    </div>
                </label>
                <label>
                    ¿Cuantas veces deseas completar esta meta?
                    <input type="number" />
                </label>
                <label>
                    ¿Tienes una fecha límite?
                    <input type="date" />
                </label>
                <label>
                    ¿Cuantas veces haz completado ya esta meta?
                    <input type="number" />
                </label>
                <label>
                    Escoge el icono para la meta
                    <select>
                        {iconos.map(opcion => <option value={opcion}>{opcion}</option>)}
                    </select>
                </label>
            </form>
            <div>
                <button>Crear</button>
                <button>Cancelar</button>
            </div>
        </div>
    );
}

export default Detalles;