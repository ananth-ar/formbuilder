import { Select as Selectui } from "antd";

function Select({ elementType }) {
  return (
    <>
      <label>{elementType.properties.required && "*"}</label>
      <label>{elementType.properties.label}</label>
      <br />
      <Selectui
        style={{ width: 150 }}
        options={elementType.properties.options}
      />
    </>
  );
}

export default Select;
