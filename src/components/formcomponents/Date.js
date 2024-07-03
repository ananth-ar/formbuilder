import { useEffect, useState } from "react";

function Date({ elementType, setFormValues }) {
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
      <input
        type="date"
        placeholder="Text Input"
        required={elementType.properties.required}
        onChange={handleChange}
      />
    </>
  );
}

export default Date;
