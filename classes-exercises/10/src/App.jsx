// import Main from "./components/organisms/Main";
import "./App.css";
import { useState } from "react";

function App() {
  const [people, setPeople] = useState(0);
  const [message, setMessage] = useState("");

  const addPeople = () => {
    if (people >= 10) {
      setMessage("¡No puedes tener más de 10 personas!");
      return;
    }
    setMessage("");
    setPeople(people + 1);
  };

  const subtractPeople = () => {
    if (people <= 0) {
      setMessage("¡No puedes tener personas negativas!");
      return;
    }
    setMessage("");
    setPeople(people - 1);
  };

  return (
    <>
      <div className="container">
        <h1 className="title">Contador: {people}</h1>
        <button className="button" onClick={addPeople}>
          +
        </button>
        <button className="button" onClick={subtractPeople}>
          -
        </button>
      </div>
      <p>{message}</p>
    </>
  );
}

export default App;
