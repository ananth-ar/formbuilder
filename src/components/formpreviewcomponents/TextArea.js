import { Input } from "antd";

const { TextArea: TextAreaui } = Input;

function TextArea({ elementType }) {
  return (
    <>
      <label>{elementType.properties.required && "*"}</label>
      <label>{elementType.properties.label}</label>
      <br />
      <TextAreaui style={{ width: 350 }} rows={4} />
    </>
  );
}

export default TextArea;
