import React, { ChangeEvent, useState } from "react";
import Encabezado from "../compartidos/Encabezado";
import Pie from "../compartidos/Pie";

function Acceso() {
  const [form, setForm] = useState({
    email: "",
    clave: "",
  });

  const { email, clave } = form;

  const onChange = (event: ChangeEvent, prop: string) => {
    const value = (event.target as HTMLInputElement).value;
    setForm((estado) => ({ ...estado, [prop]: value }));
  };

  const enAcceder = async (
    evento: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    evento.preventDefault();
    console.log(form);
    // const meta = await crearMeta(form);
    // enviar({ tipo: 'crear', meta });
  };

  return (
    <div className="tarjeta auth">
      <form className="p-4">
        <label className="label">
          Email
          <input
            className="input"
            placeholder="Escribe tu email"
            value={email}
            onChange={(e) => onChange(e, "email")}
          />
        </label>
        <label className="label">
          Clave
          <input
            className="input"
            placeholder="Escribe tu clave"
            value={clave}
            onChange={(e) => onChange(e, "clave")}
          />
        </label>
      </form>
      <div className="botones">
        <button className="boton boton--negro" onClick={(e) => enAcceder(e)}>
          Acceder
        </button>
      </div>
    </div>
  );
}

export default Acceso;
