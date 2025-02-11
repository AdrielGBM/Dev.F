import Button from "../atoms/Button";

const Header = () => {
  return (
    <>
      <Button classes={"header__button"} type={"button"}>
        Iniciar sesión
      </Button>
      <Button classes={"header__button"} type={"button"}>
        Cerrar sesión
      </Button>
    </>
  );
};

export default Header;
