import { Input as InputText } from "antd";
import styles from "../formpreviewcomponents/previewstyles/Input.module.css";


function Input({ elementType }) {
  return (
    <div className={styles.container}>
      <label>{elementType.properties.required && "*"}</label>
      <label>{elementType.properties.label}</label>
      <InputText
        type="text"
        placeholder="Text Input"
        required={elementType.properties.required}
      />
    </div>
  );
}

export default Input;
