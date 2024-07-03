import { Button as Buttonui } from "antd";

function Button({ elementType }) {
  return (
    <>
      <Buttonui type="primary">{elementType.properties.label}</Buttonui>
    </>
  );
}

export default Button;
