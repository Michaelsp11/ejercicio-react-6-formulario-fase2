import PropTypes from "prop-types";

export const Resumen = (props) => {
  const { retrocedePaso, datosPersonales, datosRegistro, datosAcceso } = props;
  const { nombre, apellidos, fechaNacimiento, email } = datosPersonales;
  const { username, password, repitePassword } = datosRegistro;
  const {
    username: usernameLogin,
    password: passwordLogin,
    recordarPassword,
  } = datosAcceso;
  return (
    <>
      <h2>Resumen</h2>
      <h3>Datos Personales:</h3>
      <ul class="list-group">
        <li class="list-group-item">{`Nombre: ${nombre}`}</li>
        <li class="list-group-item">{`Apellidos: ${apellidos}`}</li>
        <li class="list-group-item">{`Fecha de nacimiento: ${fechaNacimiento}`}</li>
        <li class="list-group-item">{`Correo: ${email}`}</li>
      </ul>
      <h3>Datos Acceso:</h3>
      <ul class="list-group">
        <li class="list-group-item">{`Nombre de usuario: ${username}`}</li>
        <li class="list-group-item">{`Contraseña: ${password}`}</li>
        <li class="list-group-item">{`Repite contraseña: ${repitePassword}`}</li>
      </ul>
      <h3>Datos Registro:</h3>
      <ul class="list-group">
        <li class="list-group-item">{`Nombre de usuario: ${usernameLogin}`}</li>
        <li class="list-group-item">{`Contraseña: ${passwordLogin}`}</li>
        <li class="list-group-item">{`Recordar contraseña: ${recordarPassword}`}</li>
      </ul>
      <button className="btn btn-info" onClick={retrocedePaso}>
        Anterior
      </button>
    </>
  );
};

Resumen.propTypes = {
  retrocedePaso: PropTypes.func.isRequired,
};
