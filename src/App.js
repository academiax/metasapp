import React from "react";
import { useContext, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router";
import "./App.css";
import Acceso from "./componentes/publico/acceso/Acceso";
import Layout from "./componentes/compartidos/Layout";
import Modal from "./componentes/compartidos/Modal";
import NoEncontrado from "./componentes/compartidos/NoEncontrado";
import Lista from "./componentes/privado/lista/Lista";
import Detalles from "./componentes/privado/nueva/Detalles";
import { ContextoMetas } from "./memoria/Metas";
import { pedirMetas } from "./servicios/Metas";
import Registro from "./componentes/publico/registro/Registro";
import { Autenticar } from "./componentes/compartidos/Autenticar";

function App() {
  const [, enviar] = useContext(ContextoMetas);

  useEffect( () => {
    (async function () {
      const metas = await pedirMetas();
      enviar({ tipo: "colocar", metas });
    })();
  }, [enviar]);

  return (
    <Routes>
      <Route path="/"
        element={<Navigate to="/lista" />}
      />
      <Route element={<Layout />}>
        <Route path="/acceso" element={<Acceso />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="*" element={<NoEncontrado />} />
      </Route>
      <Route element={<Layout privado />}>
        <Route element={<Autenticar />} >
          <Route path="/lista" element={<Lista />}>
            <Route
              path="/lista/:id"
              element={
                <Modal>
                  <Detalles />
                </Modal>
              }
            />
          </Route>
          <Route path="/nueva" element={<Detalles />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
