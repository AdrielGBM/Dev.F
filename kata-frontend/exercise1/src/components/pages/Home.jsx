import Header from "../organisms/Header";
import Table from "../organisms/Table";
import "../../styles/home.css";

function Home() {
  return (
    <>
      <Header title={"React Issues"}></Header>
      <main className="main">
        <Table parentClass="main"></Table>
      </main>
    </>
  );
}

export default Home;
