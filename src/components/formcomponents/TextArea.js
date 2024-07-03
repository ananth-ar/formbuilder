function TextArea({ elementType, setFormValues }) {
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
      <br />
      <textarea
        onChange={handleChange}
        required={elementType.properties.required}
        rows="3"
        cols="30"
      />
    </>
  );
}

export default TextArea;
