import { useEffect, useState } from "react";

function Radiobutton({ elementType, setFormValues }) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  useEffect(() => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [elementType.id]: selectedOption,
    }));
  }, [selectedOption]);

  return (
    <>
      <label>{elementType.properties.required && "*"}</label>
      <label>{elementType.properties.label}</label>
      <br />
      {elementType.properties.radiooptions.map((radio, index) => (
        <label key={index}>
          <input
            type="radio"
            value={radio.value}
            name={elementType.id}
            onChange={handleChange}
            required={elementType.properties.required}
          />
          {radio.label}
        </label>
      ))}
    </>
  );
}

export default Radiobutton;
