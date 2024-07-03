import React, { useState } from "react";

export const FormContext = React.createContext();

const FormProvider = ({ children }) => {
  const [createdForms, setCreatedForms] = useState([]);
  const [formData, setFormdata] = useState();

  const formdatas = {
    createdForms,
    formData,
    setCreatedForms,
    setFormdata,
  };

  return (
    <FormContext.Provider value={formdatas}>{children}</FormContext.Provider>
  );
};

export default FormProvider;
