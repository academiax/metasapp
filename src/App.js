import React from 'react';
import { useContext, useEffect } from 'react';
import { Routes, Route } from 'react-router';
import './App.css';
import Layout from './componentes/compartidos/Layout';
import Modal from './componentes/compartidos/Modal';
import NoEncontrado from './componentes/compartidos/NoEncontrado';
import Lista from './componentes/lista/Lista';
import Detalles from './componentes/nueva/Detalles';
import { Contexto } from './servicios/Memoria';
import { pedirMetas } from './servicios/Pedidos';

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
      </Route>
      <Route path="*" element={<NoEncontrado />} />
    </Routes>
  );
}

export default App;
