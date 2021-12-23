import React from 'react';
import { useContext, useEffect } from 'react';
import { Routes, Route } from 'react-router';
import './App.css';
import Acceso from './componentes/acceso/Acceso';
import Layout from './componentes/compartidos/Layout';
import Modal from './componentes/compartidos/Modal';
import NoEncontrado from './componentes/compartidos/NoEncontrado';
import Pie from './componentes/compartidos/Pie';
import Lista from './componentes/lista/Lista';
import Detalles from './componentes/nueva/Detalles';
import { Contexto } from './servicios/Memoria';
import { pedirMetas } from './servicios/Metas';

function App() {

  const [, enviar] = useContext(Contexto);

  useEffect(async () => {
    (async function () {
      const metas = await pedirMetas();
      enviar({ tipo: 'colocar', metas });
    })();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Lista />} />
        <Route path="/lista" element={<Lista />}>
          <Route path="/lista/:id" element={
            <Modal>
              <Detalles />
            </Modal>
          } />
        </Route>
        <Route path="/nueva" element={<Detalles />} />
        <Route path="/acceso" element={<Acceso />} />
        <Route path="/inscribirse" element={<Acceso />} />
        <Route path="*" element={<NoEncontrado />} />
      </Route>
    </Routes>
  );
}

export default App;
