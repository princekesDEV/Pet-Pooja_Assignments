import React from "react";
import CheckBoxGroup from "./CheckBoxGroup.jsx";
import RadioGroup from "./RadioGroup.jsx";
import SwitchButton from "./SwitchButton.jsx";

function FormContainer({ formConfig }) {
  let newFormConfig = Object.entries(formConfig);

  return (
    <div>
      <form>
        {newFormConfig.map(([key, value]) => {
          return (
            <>
              <label htmlFor={key}>
                {key}:{" "}
                {value.type == "text" ? (
                  <input type="text" placeholder={value.placeholder} required />
                ) : value.type == "textarea" ? (
                  <textarea
                    placeholder={value.placeholder}
                    cols={30}
                    rows={10}
                  ></textarea>
                ) : (
                  ""
                )}{" "}
              </label>
              <br />
            </>
          );
        })}
        <label htmlFor="feedback-priority">
          Feedback Priority:{" "}
          <select name="feedback-priority" id="feedback-priority">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>
        <CheckBoxGroup />
        <RadioGroup />
        <SwitchButton />
      </form>
    </div>
  );
}

export default FormContainer;
