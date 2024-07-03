import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Input from "./formpreviewcomponents/Input";
import Checkbox from "./formpreviewcomponents/Checkbox";
import Select from "./formpreviewcomponents/Select";
import Radiobutton from "./formpreviewcomponents/Radiobutton";
import Date from "./formpreviewcomponents/Date";
import TextArea from "./formpreviewcomponents/TextArea";
import Title from "./formpreviewcomponents/Title";
import Number from "./formpreviewcomponents/Number";
import Button from "./formpreviewcomponents/Button";
import { Button as Buttonant } from "antd";
import styles from "../styles/FormElement.module.css";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const FormElement = ({ elementType, setFormdata, removeElement }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: elementType.id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  let innerElement;
  switch (elementType.type) {
    case "text":
      innerElement = <Input elementType={elementType} />;
      break;
    case "check-box":
      innerElement = <Checkbox elementType={elementType} />;
      break;
    case "select":
      innerElement = <Select elementType={elementType} />;
      break;
    case "radio":
      innerElement = <Radiobutton elementType={elementType} />;
      break;
    case "date":
      innerElement = <Date elementType={elementType} />;
      break;
    case "text-area":
      innerElement = <TextArea elementType={elementType} />;
      break;
    case "title":
      innerElement = <Title elementType={elementType} />;
      break;
    case "number":
      innerElement = <Number elementType={elementType} />;
      break;
    case "button":
      innerElement = <Button elementType={elementType} />;
      break;
    default:
      innerElement = null;
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={styles.elementcontainer}
    >
      <div>{innerElement}</div>
      <div>
        {setFormdata && (
          <Buttonant
            className={styles.button}
            type="primary"
            onClick={() => setFormdata(elementType.id)}
            icon={<EditOutlined />}
            size="default"
          />
        )}
        {removeElement && (
          <Buttonant
            type="primary"
            onClick={() => removeElement(elementType.id)}
            icon={<DeleteOutlined />}
            size="default"
          />
        )}
      </div>
    </div>
  );
};

export default FormElement;
