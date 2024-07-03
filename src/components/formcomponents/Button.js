function Button({ elementType }) {
  return (
    <>
      <button>{elementType.properties.label}</button>
    </>
  );
}

export default Button;
