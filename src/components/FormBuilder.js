import React, { useContext, useState } from "react";
import FormPreview from "./FormPreview";
import {
  DndContext,
  KeyboardSensor,
  MouseSensor,
  PointerSensor,
  TouchSensor,
  closestCorners,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { addElement, addElement as handleAddClick } from "./utiles/addElment";
import { FormContext } from "../context/provider";
import ElementToolbar from "./ElementToolbar";
import styles from "../styles/FormBuilder.module.css";

const FormBuilder = () => {
  const { createdForms, setCreatedForms } = useContext(FormContext);

  const [formElements, setFormElements] = useState([]);
  const pointerSensor = useSensor(PointerSensor, {
    activationConstraint: {
      distance: 0.01,
    },
  });

  const mouseSensor = useSensor(MouseSensor);
  const touchSensor = useSensor(TouchSensor);
  const keyboardSensor = useSensor(KeyboardSensor);

  const sensors = useSensors(
    mouseSensor,
    touchSensor,
    keyboardSensor,
    pointerSensor
  );

  const handleAddClick = (type) => {
    addElement(type, setFormElements, formElements);
  };

  const updateFormElement = (id, newProperties) => {
    const updatedElements = formElements.map((element) => {
      if (element.id === id) {
        return {
          ...element,
          properties: { ...element.properties, ...newProperties },
        };
      }
      return element;
    });
    setFormElements(updatedElements);
  };

  const removeElement = (id) => {
    setFormElements(formElements.filter((element) => element.id !== id));
  };

  const getTaskPos = (id) => formElements.findIndex((task) => task.id === id);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id === over.id) return;

    setFormElements((formElements) => {
      const originalPos = getTaskPos(active.id);
      const newPos = getTaskPos(over.id);

      return arrayMove(formElements, originalPos, newPos);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCreatedForms([...createdForms, formElements]);
    console.log(formElements);
  };

  return (
    <>
      <div className={styles.container}>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCorners}
          onDragEnd={handleDragEnd}
        >
          <FormPreview
            formElements={formElements}
            removeElement={removeElement}
            updateFormElement={updateFormElement}
          />
        </DndContext>
        <ElementToolbar
          handleSubmit={handleSubmit}
          handleAddClick={handleAddClick}
        />
      </div>
    </>
  );
};

export default FormBuilder;
