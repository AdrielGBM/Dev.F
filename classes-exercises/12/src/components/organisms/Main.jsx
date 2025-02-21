import { useState } from "react";
import { useEffect } from "react";

import User from "../molecules/User";

function Main() {
  const [loading, setLoading] = useState(false);
  const [users, setUser] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    let URL = "https://jsonplaceholder.typicode.com/todos";

    async function getAll() {
      try {
        setLoading(true);
        const response = await fetch(URL);
        if (response.status !== 200) {
          throw new Error("Error al obtener los datos");
        }
        const data = await response.json();
        setUser(data);
      } catch (error) {
        setError("Error:", error.message);
      } finally {
        setLoading(false);
      }
    }

    getAll();
  }, []);

  if (loading)
    return (
      <main className="main">
        <h1 className="title">Cargando....</h1>
      </main>
    );
  if (error)
    return (
      <main className="main">
        <h1 className="title">Ocurrió un error: {error}</h1>
      </main>
    );

  return (
    <>
      <main className="main">
        <h1 className="title">Usuarios</h1>
        {users.map((user) => {
          return (
            <User
              key={user.id}
              classes={"user"}
              userId={user.userId}
              title={user.title}
              completed={user.completed}
            />
          );
        })}
      </main>
    </>
  );
}

export default Main;
