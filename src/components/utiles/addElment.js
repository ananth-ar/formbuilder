export const addElement = (type, setFormElements, formElements) => {
  if (type === "text") {
    setFormElements([
      ...formElements,
      {
        type,
        id: Date.now(),
        properties: {
          label: "Input-Text",
          required: false,
        },
      },
    ]);
  } else if (type === "check-box") {
    setFormElements([
      ...formElements,
      {
        type,
        id: Date.now(),
        properties: {
          label: "Check-Box",
          checkboxs: [
            {
              label: "first",
              checked: false,
            },
          ],
        },
      },
    ]);
  } else if (type === "select") {
    setFormElements([
      ...formElements,
      {
        type,
        id: Date.now(),
        properties: {
          label: "Select",
          required: false,
          options: [{ value: "option 1", label: "option 1" }],
        },
      },
    ]);
  } else if (type === "radio") {
    setFormElements([
      ...formElements,
      {
        type,
        id: Date.now(),
        properties: {
          label: "Radio-Button",
          required: false,
          radiooptions: [
            { value: "option 1", label: "option 1" },
            { value: "option 2", label: "option 2" },
          ],
        },
      },
    ]);
  } else if (type === "date") {
    setFormElements([
      ...formElements,
      {
        type,
        id: Date.now(),
        properties: { label: "Date", required: false },
      },
    ]);
  } else if (type === "text-area") {
    setFormElements([
      ...formElements,
      {
        type,
        id: Date.now(),
        properties: { label: "Text-Area", required: false },
      },
    ]);
  } else if (type === "title") {
    setFormElements([
      ...formElements,
      {
        type,
        id: Date.now(),
        properties: { label: "Title" },
      },
    ]);
  } else if (type === "number") {
    setFormElements([
      ...formElements,
      {
        type,
        id: Date.now(),
        properties: { label: "Number", required: false },
      },
    ]);
  } else if (type === "button") {
    setFormElements([
      ...formElements,
      {
        type,
        id: Date.now(),
        properties: { label: "Button" },
      },
    ]);
  }
};
