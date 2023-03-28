function Boton({ id, activo, className, children, onClick }) {
  return (
    <button
      id={id}
      className={`${className} ${!activo && ' disabled'}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Boton;
