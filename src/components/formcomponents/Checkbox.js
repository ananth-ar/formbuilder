function Checkbox({ elementType, setFormValues }) {
  const handleInputChange = (e, label) => {
    const checked = e.target.checked;
    if (setFormValues)
      setFormValues((prevValues) => ({
        ...prevValues,
        [elementType.id]: {
          ...prevValues[elementType.id],
          [label]: checked,
        },
      }));
  };

  return (
    <>
      <label>{elementType.properties.required && "*"}</label>
      <label>{elementType.properties.label}</label>
      {elementType.properties.checkboxs.map((checkbox, index) => (
        <div key={index}>
          <label>
            <input
              type="checkbox"
              defaultChecked={checkbox.checked}
              onChange={(e) => handleInputChange(e, checkbox.label)}
            />
            {checkbox.label}
          </label>
        </div>
      ))}
    </>
  );
}

export default Checkbox;
