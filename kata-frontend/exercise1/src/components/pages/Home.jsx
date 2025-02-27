import { useState, useEffect } from "react";

import Header from "../organisms/Header";
import Table from "../organisms/Table";
import "../../styles/home.css";

function Home() {
  const [loading, setLoading] = useState(false);
  const [issues, setIssues] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    let URL = "https://api.github.com/repos/facebook/react/issues";

    async function getIssues() {
      try {
        setLoading(true);
        const response = await fetch(URL);
        if (response.status !== 200) {
          throw new Error("Error al obtener los datos");
        }
        const data = await response.json();
        setIssues(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    getIssues();
  }, []);

  if (loading)
    return (
      <>
        <Header title={"React Issues"}></Header>
        <main className="main">
          <span className="main-message">{"Cargando...."}</span>
        </main>
      </>
    );
  if (error)
    return (
      <>
        <Header title={"React Issues"}></Header>
        <main className="main">
          <span className="main-message">{`Ocurrió un error: ${error.message}`}</span>
        </main>
      </>
    );

  return (
    <>
      <Header title={"React Issues"}></Header>
      <main className="main">
        <div className="main-wrapper">
          <Table parentClass="main" data={issues}></Table>
        </div>
      </main>
    </>
  );
}

export default Home;
