import { Checkbox as Checkboxui } from "antd";

function Checkbox({ elementType, setFormValues }) {
  return (
    <>
      <label>{elementType.properties.required && "*"}</label>
      <label>{elementType.properties.label}</label>
      {elementType.properties.checkboxs.map((checkbox, index) => (
        <div key={index}>
          <label>
            <Checkboxui checked={checkbox.checked} readOnly />
            {checkbox.label}
          </label>
        </div>
      ))}
    </>
  );
}

export default Checkbox;

