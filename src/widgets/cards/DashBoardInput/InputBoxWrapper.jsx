/* eslint-disable react/prop-types */
import propTypes from "prop-types";

// dashboard input box that contains the title, input and submit action
function InputBoxWrapper({ inputHeading, children }) {
  return (
    <div
      className="add-court-section common-add-section bg-white mt-6 pb-4"
      style={{
        height: "fit-content",
      }}
    >
      <h2 className="bg-blue2 text-white py-3 font-semibold text-center rounded-t-md">
        {inputHeading}
      </h2>
      {children}
    </div>
  );
}

// prop-type config for the validation
InputBoxWrapper.propTypes = {
  inputHeading: propTypes.string.isRequired,
};

export default InputBoxWrapper;
