/* eslint-disable react/prop-types */
import { Icon } from "@iconify/react";

function MelmilapDartaInput({ melmilapInput }) {
  const { labelText, inputType, option } = melmilapInput;
  return (
    <div className="md:w-1/2 w-full">
      {inputType == "text" ? (
        <div className="flex flex-col gap-2 h-fit text-text-col px-4 py-4 w-full">
          <div style={{ fontSize: 15 }}>
            <label className="font-medium">{labelText}</label>{" "}
            <span className="text-red">*</span>
          </div>

          <input
            type="text"
            placeholder={labelText}
            className="px-2 py-2 text-sm rounded border border-border-col focus:border-blue outline-none"
            required
          />
        </div>
      ) : inputType == "file" ? (
        <div className="flex flex-col gap-2 h-fit text-text-col px-4 py-4 w-full">
          <div style={{ fontSize: 15 }}>
            <label>{labelText}</label> <span className="text-red">*</span>
          </div>
          <label
            className="fileInput px-2 py-2 bg-orange2 rounded focus:border-blue cursor-pointer focus:outline-none"
            style={{ paddingTop: "10px" }}
          >
            <input
              type="file"
              placeholder={labelText}
              required
              style={{
                display: "none",
              }}
            />
            <Icon
              icon="fa-solid:upload"
              className="text-lg text-white w-full margin-auto"
            />
          </label>
        </div>
      ) : (
        <div className="flex flex-col gap-2 h-fit text-text-col px-4 py-4 w-full">
          <div style={{ fontSize: 15 }}>
            <label>{labelText}</label> <span className="text-red">*</span>
          </div>
          <select
            name="select-tg"
            className="px-2 py-2 text-sm text-text-col rounded border border-border-col focus:border-blue outline-none"
            style={{
              paddingTop: "7px",
            }}
          >
            {option.map((data, index) => (
              <option value={data} key={index}>
                {data}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}

export default MelmilapDartaInput;
