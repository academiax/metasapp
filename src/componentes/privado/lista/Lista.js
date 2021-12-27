import React from "react";
import { useContext } from "react";
import { Outlet } from "react-router";
import { ContextoMetas } from "../../../memoria/Metas";
import Meta from "./Meta";

function Lista() {
  const [metas] = useContext(ContextoMetas);

  return (
    <>
      {metas.orden.map((id) => (
        <Meta key={id} {...metas.objetos[id]}></Meta>
      ))}
      <Outlet />
    </>
  );
}

export default Lista;
