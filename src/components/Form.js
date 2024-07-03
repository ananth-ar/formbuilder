import React, { useContext, useState } from "react";

import { FormContext } from "../context/provider";
import FormElement from "./FormElement2";

const Form = () => {
  const { formData } = useContext(FormContext);

  const [formValues, setFormValues] = useState(
    formData.reduce((acc, element) => {
      if (element.type === "check-box") {
        acc[element.id] = element.properties.checkboxs.reduce(
          (cbAcc, checkbox) => {
            cbAcc[checkbox.label] = checkbox.checked;
            return cbAcc;
          },
          {}
        );
      } else {
        acc[element.id] = element.value || "";
      }
      return acc;
    }, {})
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      {formData.map((element) => (
        <FormElement
          key={element.id}
          elementType={element}
          setFormValues={setFormValues}
        />
      ))}
      <button>submit</button>
    </form>
  );
};

export default Form;
