function Number({ elementType, setFormValues }) {
  const handleChange = (e) => {
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
        type="number"
        placeholder="Text Input"
        required={elementType.properties.required}
        onChange={handleChange}
      />
    </>
  );
}

export default Number;
