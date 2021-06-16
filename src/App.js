import { useState } from "react";
import { Paso1 } from "./componentes/Paso1";
import { Paso2 } from "./componentes/Paso2";
import { Paso3 } from "./componentes/Paso3";
import { Resumen } from "./componentes/Resumen";

function App() {
  const [paso, setPaso] = useState(1);
  const [datosPersonales, setDatosPersonales] = useState({
    nombre: "",
    apellidos: "",
    fechaNacimiento: "",
    email: "",
  });
  const [datosRegistro, setDatosRegistro] = useState({
    username: "",
    password: "",
    repitePassword: "",
  });
  const [datosAcceso, setDatosAcceso] = useState({
    username: "",
    password: "",
    recordarPassword: true,
  });
  const guardarDatosPersonales = (datos) => {
    setDatosPersonales(datos);
  };
  const guardarDatosRegistro = (datos) => {
    setDatosRegistro(datos);
  };
  const guardarDatosAcceso = (datos) => {
    setDatosAcceso(datos);
  };
  const avanzaPaso = () => {
    if (paso === 4) {
      return;
    }
    setPaso(paso + 1);
  };
  const retrocedePaso = () => {
    if (paso === 1) {
      return;
    }
    setPaso(paso - 1);
  };
  return (
    <>
      <header>
        <h1>Formulario</h1>
      </header>
      <div className="contenedor">
        {paso === 1 && (
          <Paso1
            avanzaPaso={avanzaPaso}
            datosPersonales={datosPersonales}
            guardarDatos={guardarDatosPersonales}
          />
        )}
        {paso === 2 && (
          <Paso2
            avanzaPaso={avanzaPaso}
            datosRegistro={datosRegistro}
            retrocedePaso={retrocedePaso}
            guardarDatos={guardarDatosRegistro}
          />
        )}
        {paso === 3 && (
          <Paso3
            datosAcceso={datosAcceso}
            avanzaPaso={avanzaPaso}
            retrocedePaso={retrocedePaso}
            guardarDatos={guardarDatosAcceso}
          />
        )}
        {paso === 4 && (
          <Resumen
            retrocedePaso={retrocedePaso}
            datosPersonales={datosPersonales}
            datosRegistro={datosRegistro}
            datosAcceso={datosAcceso}
          />
        )}
      </div>
    </>
  );
}

export default App;
