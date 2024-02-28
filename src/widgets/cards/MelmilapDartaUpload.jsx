/* eslint-disable react/prop-types */
import { Icon } from "@iconify/react";

function MelmilapDartaUpload({ melmilapDown }) {
  return (
    <div className="row flex flex-col justify-between md:flex-row">
      {melmilapDown.map(({ labelText }, index) => (
        <div
          key={index}
          className="flex flex-col gap-2 h-fit text-text-col px-4 py-4 w-full md:w-1/2"
        >
          <div style={{ fontSize: 15 }}>
            <label>{labelText}</label> <span className="text-red">*</span>
          </div>
          <label className="fileInput px-2 py-2 bg-orange2 rounded focus:border-blue cursor-pointer outline-none">
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
      ))}
    </div>
  );
}

export default MelmilapDartaUpload;
