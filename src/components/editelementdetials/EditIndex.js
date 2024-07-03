import React, { forwardRef } from "react";
import Inputedit from "./Inputedit";
import Editcheckbox from "./Editcheckbox";
import Editselect from "./Editselect";
import Editradiobutton from "./Editradiobutton";
import Editdate from "./Editdate";
import Edittextarea from "./Edittextarea";
import Edittitle from "./Edittitle";
import Editnumber from "./Editnumber";
import Editbutton from "./Editbutton";

function EditIndex({ setIsEditable, elementType, updateFormElement }, ref) {
  switch (elementType.type) {
    case "text":
      return (
        <Inputedit
          ref={ref}
          setIsEditable={setIsEditable}
          elementType={elementType}
          updateFormElement={updateFormElement}
        />
      );
    case "check-box":
      return (
        <Editcheckbox
          ref={ref}
          setIsEditable={setIsEditable}
          elementType={elementType}
          updateFormElement={updateFormElement}
        />
      );
    case "select":
      return (
        <Editselect
          ref={ref}
          setIsEditable={setIsEditable}
          elementType={elementType}
          updateFormElement={updateFormElement}
        />
      );
    case "radio":
      return (
        <Editradiobutton
          ref={ref}
          setIsEditable={setIsEditable}
          elementType={elementType}
          updateFormElement={updateFormElement}
        />
      );
    case "date":
      return (
        <Editdate
          ref={ref}
          setIsEditable={setIsEditable}
          elementType={elementType}
          updateFormElement={updateFormElement}
        />
      );
    case "text-area":
      return (
        <Edittextarea
          ref={ref}
          setIsEditable={setIsEditable}
          elementType={elementType}
          updateFormElement={updateFormElement}
        />
      );
    case "title":
      return (
        <Edittitle
          ref={ref}
          setIsEditable={setIsEditable}
          elementType={elementType}
          updateFormElement={updateFormElement}
        />
      );
    case "number":
      return (
        <Editnumber
          ref={ref}
          setIsEditable={setIsEditable}
          elementType={elementType}
          updateFormElement={updateFormElement}
        />
      );
    case "button":
      return (
        <Editbutton
          ref={ref}
          setIsEditable={setIsEditable}
          elementType={elementType}
          updateFormElement={updateFormElement}
        />
      );
    default:
      return null;
  }
}

export default forwardRef(EditIndex);
