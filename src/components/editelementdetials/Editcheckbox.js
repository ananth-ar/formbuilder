import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

function Editcheckbox({ setIsEditable, elementType, updateFormElement }, ref) {
  const [checkboxs, setCheckboxs] = useState(elementType.properties.checkboxs);
  const [label, setLabel] = useState(elementType.properties.label);
  const dialogRef = useRef(null);

  useImperativeHandle(ref, () => {
    return {
      openDialog: () => {
        if (dialogRef.current) {
          dialogRef.current.show();
        }
      },
    };
  });

  const closeDialog = () => {
    if (dialogRef.current) {
      setIsEditable(false);
      dialogRef.current.close();
    }
  };

  const handleLabelChange = (index, newLabel) => {
    const newCheckboxs = [...checkboxs];
    newCheckboxs[index].label = newLabel;
    setCheckboxs(newCheckboxs);
  };

  const handleCheckedChange = (index, isChecked) => {
    const newCheckboxs = [...checkboxs];
    newCheckboxs[index].checked = isChecked;
    setCheckboxs(newCheckboxs);
  };

  const addCheckbox = () => {
    const newCheckbox = { label: `value`, checked: false };
    setCheckboxs([...checkboxs, newCheckbox]);
  };

  const removeCheckbox = (index) => {
    const updatedCheckbox = checkboxs.filter((_, i) => i !== index);
    setCheckboxs(updatedCheckbox);
  };

  const handleSave = () => {
    let newProperties = {
      label,
      checkboxs,
    };
    updateFormElement(elementType.id, newProperties);
    closeDialog();
  };

  return (
    <dialog ref={dialogRef}>
      <span onClick={closeDialog}>x</span>
      <div>
        <label>Label </label>
        <input
          type="text"
          value={label}
          placeholder="Enter Label for input"
          onChange={(e) => setLabel(e.target.value)}
        />
        <br />
        {checkboxs.map((checkbox, index) => (
          <div key={index}>
            <input
              type="text"
              value={checkbox.label}
              placeholder="enter label"
              onChange={(e) => handleLabelChange(index, e.target.value)}
            />
            <label>
              <input
                type="checkbox"
                checked={checkbox.checked}
                onChange={(event) =>
                  handleCheckedChange(index, event.target.checked)
                }
              />
              -by default
            </label>
            <button onClick={() => removeCheckbox(index)}>remove</button>
          </div>
        ))}
        <button onClick={addCheckbox}>add</button>
        <br />
        <button onClick={handleSave}>save</button>
      </div>
    </dialog>
  );
}

export default forwardRef(Editcheckbox);
