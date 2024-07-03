import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

function Editselect({ setIsEditable, elementType, updateFormElement }, ref) {
  const [required, setRequired] = useState(elementType.properties.required);
  const [label, setLabel] = useState(elementType.properties.label);
  const [options, setOptions] = useState(elementType.properties.options);
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

  const handleValueChange = (index, newValue) => {
    const newOptions = [...options];
    newOptions[index].value = newValue;
    newOptions[index].label = newValue;
    setOptions(newOptions);
  };

  const addOption = () => {
    const newOption = { value: ``, label: `` };
    setOptions([...options, newOption]);
  };

  const removeOption = (index) => {
    const updatedOptions = options.filter((_, i) => i !== index);
    setOptions(updatedOptions);
  };

  const handleSave = () => {
    let newProperties = {
      label,
      required,
      options,
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
        <label>
          <input
            type="checkbox"
            checked={required}
            onChange={(event) => setRequired(event.target.checked)}
          />
          required
        </label>
        <br />
        {options.map((option, index) => (
          <div key={index}>
            <input
              type="text"
              value={option.value}
              onChange={(e) => handleValueChange(index, e.target.value)}
            />
            <button onClick={() => removeOption(index)}>remove</button>
          </div>
        ))}
        <button onClick={addOption}>addOption</button>
        <br />
        <button onClick={handleSave}>save</button>
      </div>
    </dialog>
  );
}

export default forwardRef(Editselect);
