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
        setError("Error:", error.message);
      } finally {
        setLoading(false);
      }
    }
    getIssues();
  }, []);

  if (loading)
    return (
      <>
        <Header title={"Cargando...."}></Header>
        <main className="main"></main>
      </>
    );
  if (error)
    return (
      <>
        <Header title={`Ocurrió un error: ${error}`}></Header>
        <main className="main">
          <h1 className="title"></h1>
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
