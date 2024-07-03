import { Button } from "antd";
import styles from "../styles/ElementToolbar.module.css";
import textinput from "../assets/icons8-input-text-64.png";
import numberinput from "../assets/icons8-numbers-input-form-50.png";
import textarea from "../assets/text-area.png";
import button from "../assets/press-button.png";
import checkbox from "../assets/icons8-checkbox-24.png";
import select from "../assets/icons8-dropdown-field-50.png";
import radio from "../assets/icons8-radio-button-24.png";
import title from "../assets/icons8-type-30.png";
import date from "../assets/calendar.png";

const ElementToolbar = ({ handleSubmit, handleAddClick }) => {
  return (
    <>
      <div className={styles.container}>
        <h3 className={styles.heading}>Toolbar</h3>
        <div className={styles.formelementcontainer}>
          <button
            className={styles.button}
            onClick={() => handleAddClick("text")}
          >
            <img className={styles.icon} src={textinput} />
            Text Input
          </button>
          <button
            className={styles.button}
            onClick={() => handleAddClick("check-box")}
          >
            <img className={styles.ico} src={checkbox} />
            Check-Box
          </button>
          <button
            className={styles.button}
            onClick={() => handleAddClick("select")}
          >
            <img className={styles.icon} src={select} />
            Add Select
          </button>
          <button
            className={styles.button}
            onClick={() => handleAddClick("radio")}
          >
            <img className={styles.icon} src={radio} />
            Radio-Button
          </button>
          <button
            className={styles.button}
            onClick={() => handleAddClick("date")}
          >
            <img className={styles.icon} src={date} />
            Add Date
          </button>
          <button
            className={styles.button}
            onClick={() => handleAddClick("text-area")}
          >
            <img className={styles.icon} src={textarea} />
            TextArea
          </button>
          <button
            className={styles.button}
            onClick={() => handleAddClick("title")}
          >
            <img className={styles.icon} src={title} />
            Title
          </button>
          <button
            className={styles.button}
            onClick={() => handleAddClick("number")}
          >
            <img className={styles.icon} src={numberinput} />
            Number Input
          </button>
          <button
            className={styles.button}
            onClick={() => handleAddClick("button")}
          >
            <img className={styles.icon} src={button} />
            Button
          </button>
        </div>
        <div className={styles.buttoncontainer}>
          <Button type="primary" onClick={handleSubmit}>
            create
          </Button>
        </div>
      </div>
    </>
  );
};

export default ElementToolbar;
