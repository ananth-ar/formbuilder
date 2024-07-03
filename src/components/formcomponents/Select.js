import { useEffect, useState } from "react";

function Select({ elementType, setFormValues }) {
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
      <select
        onChange={handleChange}
        required={elementType.properties.required}
      >
        <option value="">Select a car</option>
        {elementType.properties.options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
}

export default Select;
