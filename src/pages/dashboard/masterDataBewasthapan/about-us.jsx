/* eslint-disable react/prop-types */
import JoditEditor from "jodit-react";
import { useMemo, useRef, useState } from "react";
import BreadCrumb from "@components/BreadCrumb";

function AboutUs({ placeholder }) {
  const editor = useRef(null);
  const [content, setContent] = useState();

  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: placeholder || "यहाँ लेख्नुहोस्...",
      height: 450,
    }),
    [placeholder],
  );

  function handleUpdate(newContent) {
    setContent(newContent);
  }

  return (
    <div>
      <section className="main-section mr-4">
        <BreadCrumb
          head="होम"
          text="मास्टर डाटा व्यवस्थापन / हाम्रो बारेमा"
          customStyle="mt-0 mx-0"
          href="hi"
        />
        <div
          className="text-editor-wrapper mt-7 flex flex-col items-center gap-6 pb-6 bg-white"
          style={{ height: "fit-content" }}
        >
          <h3 className="bg-blue2 text-white w-full py-3.5 font-semibold text-center rounded-t-md">
            "हाम्रो बारेमा" सम्पादन गर्नुहोस्
          </h3>
          <div className="w-11/12 m-auto mt-7 h-full">
            <JoditEditor
              ref={editor}
              value={content}
              config={config}
              onChange={(newContent) => setContent(newContent)}
              onBlur={handleUpdate}
            />
          </div>
          <button
            className="common-court-btn py-3 px-5 bg-blue2 rounded text-white text-sm font-semibold hover:bg-green2"
            type="submit"
          >
            थप्नुहोस् / मिलाउनुहोस्
          </button>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
