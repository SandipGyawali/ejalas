import propTypes from "prop-types";

// dashboard input box that contains the title, input and submit action
function InputBox({
  method = "get",
  action,
  inputHeading,
  inputPlaceHolder,
  buttonName,
}) {
  return (
    <div
      className="add-court-section common-add-section bg-white mt-6"
      style={{
        height: "202px",
      }}
    >
      <h2 className="bg-blue2 text-white py-3 font-semibold text-center rounded-t-md">
        {inputHeading}
      </h2>
      <form
        action={action}
        className="flex flex-col gap-8 items-center mt-5"
        method={method}
      >
        <div className="input w-11/12 lg:w-full lg:px-8">
          <input
            type="text"
            id="courtName"
            className="form-control w-full text-text-col border border-border-col px-4 py-2 focus:outline-none rounded-md text-sm"
            name="complaintType"
            placeholder={inputPlaceHolder}
          />
        </div>
        <button
          className="common-court-btn py-3 px-5 bg-blue2 rounded text-white text-sm font-semibold hover:bg-green2"
          type="submit"
        >
          {buttonName}
        </button>
      </form>
    </div>
  );
}

// prop-type config for the validation
InputBox.propTypes = {
  method: propTypes.string.isRequired,
  action: propTypes.string.isRequired,
  inputHeading: propTypes.string.isRequired,
  inputPlaceHolder: propTypes.string.isRequired,
  buttonName: propTypes.string.isRequired,
};

export default InputBox;
