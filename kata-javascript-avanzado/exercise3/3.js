function verificarUsuario(usuario, callback) {
  // Simulamos que solo "ana" y "luis" tienen cuentas
  setTimeout(() => {
    let usuarioExiste = false;

    if (usuario === "ana" || usuario === "luis") {
      usuarioExiste = true;
    }

    callback(usuarioExiste);
  }, 1000);
}

function comprobarCuentaActiva(usuario, callback) {
  // Simulamos que todas las cuentas excepto "luis" están activas
  setTimeout(() => {
    let cuentaActiva = true;

    if (usuario === "luis") {
      cuentaActiva = false;
    }

    callback(cuentaActiva);
  }, 1000);
}

function verificarPermisos(usuario, callback) {
  // Simulamos que solo "ana" tiene permisos
  setTimeout(() => {
    let tienePermisos = false;

    if (usuario === "ana") {
      tienePermisos = true;
    }

    callback(tienePermisos);
  }, 1000);
}

// Orquestación de las verificaciones
function procesoDeVerificacion(usuario) {
  console.log(`Iniciando verificación para el usuario: ${usuario}`);

  verificarUsuario(usuario, (existe) => {
    if (!existe) {
      return console.log("El usuario no existe.");
    }
    console.log("Usuario verificado exitosamente.");

    comprobarCuentaActiva(usuario, (activa) => {
      if (!activa) {
        return console.log("La cuenta del usuario no está activa.");
      }
      console.log("La cuenta del usuario está activa.");

      verificarPermisos(usuario, (permisos) => {
        if (!permisos) {
          return console.log("El usuario no tiene permisos.");
        }
        console.log("El usuario tiene permisos. Acceso concedido.");
      });
    });
  });
}

// Ejecución de la función con diferentes usuarios
procesoDeVerificacion("ana"); // Usuario con acceso completo
procesoDeVerificacion("luis"); // Usuario sin cuenta activa
procesoDeVerificacion("pedro"); // Usuario que no existe
