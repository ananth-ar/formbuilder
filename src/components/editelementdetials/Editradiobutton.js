import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

function Editradionbutton(
  { setIsEditable, elementType, updateFormElement },
  ref
) {
  const [required, setRequired] = useState(elementType.properties.required);
  const [label, setLabel] = useState(elementType.properties.label);
  const [radiooptions, setRadiooptions] = useState(
    elementType.properties.radiooptions
  );
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

  const handleLabelChange = (index, newlabel) => {
    const newRadiooptions = [...radiooptions];
    newRadiooptions[index].value = newlabel;
    newRadiooptions[index].label = newlabel;
    setRadiooptions(newRadiooptions);
  };

  const addRadiooption = () => {
    const newRadiooption = { value: ``, label: `` };
    setRadiooptions([...radiooptions, newRadiooption]);
  };

  const removeRadiooption = (index) => {
    const updatedRadiooption = radiooptions.filter((_, i) => i !== index);
    setRadiooptions(updatedRadiooption);
  };

  const handleSave = () => {
    let newProperties = {
      label,
      required,
      radiooptions,
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
        {radiooptions.map((radiooption, index) => (
          <div key={index}>
            <input
              type="text"
              value={radiooption.label}
              placeholder="enter label"
              onChange={(e) => handleLabelChange(index, e.target.value)}
            />
            <button onClick={() => removeRadiooption(index)}>remove</button>
          </div>
        ))}
        <button onClick={addRadiooption}>add</button>
        <br />
        <button onClick={handleSave}>save</button>
      </div>
    </dialog>
  );
}

export default forwardRef(Editradionbutton);
