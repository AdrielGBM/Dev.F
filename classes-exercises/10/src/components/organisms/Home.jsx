import { useState } from "react";
import CounterButtons from "../molecules/CounterButtons";

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
  return (
    <>
      <h1 className="title">Contador</h1>
      <CounterButtons
        value={people}
        add={addPeople}
        subtract={subtractPeople}
        message={message}
      ></CounterButtons>
    </>
  );
};

export default Home;
