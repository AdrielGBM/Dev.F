import { useEffect, useState } from "react";
import Counter from "../molecules/Counter";

const Home = () => {
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

  useEffect(() => {
    setPeople(3);
  }, []);

  useEffect(() => {
    if (!(people % 2) && people !== 0) {
      setMessage("El número de personas es par.");
    }
  }, [people]);

  return (
    <>
      <h1 className="title">Contador de Personas</h1>
      <Counter
        value={people}
        add={addPeople}
        subtract={subtractPeople}
        message={message}
      ></Counter>
    </>
  );
};

export default Home;
