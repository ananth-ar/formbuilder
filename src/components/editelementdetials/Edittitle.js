import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

function Edittitle({ setIsEditable, elementType, updateFormElement }, ref) {
  const [required, setRequired] = useState(elementType.properties.required);
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

  const handleSave = () => {
    let newProperties = {
      label,
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
        <button onClick={handleSave}>save</button>
      </div>
    </dialog>
  );
}

export default forwardRef(Edittitle);
