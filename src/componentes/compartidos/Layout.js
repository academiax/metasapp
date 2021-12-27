import React from "react";
import { Outlet } from "react-router";
import Aside from "./Aside";
import Encabezado from "./Encabezado";
import Pie from "./Pie";
import estilos from "./Layout.module.css";

function Layout({ privado }) {

  return (
    <>
      <Encabezado></Encabezado>
      <main className={estilos.main}>
        {privado && <Aside />}
        <section className={estilos.section}>
          <Outlet></Outlet>
        </section>
      </main>
      <Pie></Pie>
    </>
  );
}

export default Layout;
