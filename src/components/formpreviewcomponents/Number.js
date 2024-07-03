import { Input } from "antd";

function Number({ elementType }) {
  return (
    <>
      <label>{elementType.properties.required && "*"}</label>
      <label>{elementType.properties.label}</label>
      <Input placeholder="Input a number" type="number" maxLength={16} />
    </>
  );
}

export default Number;
