import { Radio } from "antd";

function Radiobutton({ elementType }) {
  return (
    <>
      <label>{elementType.properties.required && "*"}</label>
      <label>{elementType.properties.label}</label>
      <br />
      <Radio.Group>
        {elementType.properties.radiooptions.map((radio, index) => (
          <Radio key={index} value={radio.label}>
            {radio.label}
          </Radio>
        ))}
      </Radio.Group>
    </>
  );
}

export default Radiobutton;
