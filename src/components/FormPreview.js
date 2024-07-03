import React, { useEffect, useRef, useState } from "react";
import FormElement from "./FormElement";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import EditIndex from "./editelementdetials/EditIndex";
import styles from "../styles/FormPreview.module.css";
import { Card } from "antd";

const FormPreview = ({ formElements, removeElement, updateFormElement }) => {
  const [formElementdata, setFormElementdata] = useState();
  const [isEditable, setIsEditable] = useState(false);
  const ref = useRef(null);

  const setFormdata = (id) => {
    const data = findElementById(id);
    setFormElementdata(data);
    setIsEditable(true);
  };

  const findElementById = (id) => {
    return formElements.find((element) => element.id === id);
  };

  useEffect(() => {
    if (isEditable && formElementdata) ref.current.openDialog();
    if (!isEditable && formElementdata) setFormElementdata();
  }, [isEditable]);

  return (
    <div className={styles.container}>
      <SortableContext
        items={formElements.map((element) => element.id)}
        strategy={verticalListSortingStrategy}
      >
        <Card  title="Form Preview" className={styles.card}>
          {formElements.map((element) => (
            <FormElement
              key={element.id}
              elementType={element}
              setFormdata={setFormdata}
              removeElement={removeElement}
            />
          ))}
        </Card>
      </SortableContext>
      {isEditable && (
        <EditIndex
          ref={ref}
          setIsEditable={setIsEditable}
          elementType={formElementdata}
          updateFormElement={updateFormElement}
        />
      )}
    </div>
  );
};

export default FormPreview;
