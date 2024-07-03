function Input({ elementType, setFormValues }) {
  const handleInputChange = (e) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [elementType.id]: e.target.value,
    }));
  };

  return (
    <>
      <label>{elementType.properties.required && "*"}</label>
      <label>{elementType.properties.label}</label>
      <input
        type="text"
        placeholder="Text Input"
        required={elementType.properties.required}
        onChange={handleInputChange}
      />
    </>
  );
}

export default Input;
