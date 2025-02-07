import Input from "./components/Input";
import Button from "./components/Button";
import Select from "./components/Select";
import "./App.css";

const App = () => {
  return (
    <>
      <h1 className="title">Formulario</h1>
      <form className="form">
        <fieldset className="form__fieldset">
          <Input
            id="text"
            classes="form__fieldset-input"
            type="text"
            title="Texto"
            placeholder="Escribe algo..."
          ></Input>
          <Input
            id="email"
            classes="form__fieldset-input"
            type="email"
            title="Email"
            placeholder="nombre.apellido@gmail.com"
          ></Input>
          <Input
            id="date"
            classes="form__fieldset-input"
            type="date"
            title="Fecha"
          ></Input>
          <Input
            id="number"
            classes="form__fieldset-input"
            type="number"
            title="Número"
            placeholder="1234"
          ></Input>
          <Select
            id="select"
            classes="form__fieldset-input"
            title="Selector"
            options={[
              { value: "option1", label: "Opción 1" },
              { value: "option2", label: "Opción 2" },
              { value: "option3", label: "Opción 3" },
              { value: "option4", label: "Opción 4" },
            ]}
          ></Select>
          <Button
            id="button"
            classes="form__fieldset-button"
            title="Aceptar"
          ></Button>
        </fieldset>
      </form>
    </>
  );
};

export default App;
