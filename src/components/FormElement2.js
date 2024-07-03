import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Input from "./formcomponents/Input";
import Checkbox from "./formcomponents/Checkbox";
import Select from "./formcomponents/Select";
import Radiobutton from "./formcomponents/Radiobutton";
import Date from "./formcomponents/Date";
import TextArea from "./formcomponents/TextArea";
import Title from "./formcomponents/Title";
import Number from "./formcomponents/Number";
import Button from "./formcomponents/Button";

const FormElement = ({
  elementType,
  setFormdata,
  removeElement,
  setFormValues,
}) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: elementType.id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  let innerElement;
  switch (elementType.type) {
    case "text":
      innerElement = (
        <Input elementType={elementType} setFormValues={setFormValues} />
      );
      break;
    case "check-box":
      innerElement = (
        <Checkbox elementType={elementType} setFormValues={setFormValues} />
      );
      break;
    case "select":
      innerElement = (
        <Select elementType={elementType} setFormValues={setFormValues} />
      );
      break;
    case "radio":
      innerElement = (
        <Radiobutton elementType={elementType} setFormValues={setFormValues} />
      );
      break;
    case "date":
      innerElement = (
        <Date elementType={elementType} setFormValues={setFormValues} />
      );
      break;
    case "text-area":
      innerElement = (
        <TextArea elementType={elementType} setFormValues={setFormValues} />
      );
      break;
    case "title":
      innerElement = (
        <Title elementType={elementType} setFormValues={setFormValues} />
      );
      break;
    case "number":
      innerElement = (
        <Number elementType={elementType} setFormValues={setFormValues} />
      );
      break;
    case "button":
      innerElement = (
        <Button elementType={elementType} setFormValues={setFormValues} />
      );
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
      className="task"
    >
      {innerElement}
    </div>
  );
};

export default FormElement;
