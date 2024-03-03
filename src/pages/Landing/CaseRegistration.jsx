import BreadCrumb from "../../components/BreadCrumb";

function CaseRegistration() {
  return (
    <div className="online-case-registration-page">
      <section className="main-section">
        <div className="main-section-wrapper flex flex-col items-center">
          <BreadCrumb head="गृहपृष्ठ" text="विद्युतीय विवाद हाल्नुहोस्" />

          <section className="case-registration-option-section w-11/12 mt-10 mb-5">
            <div className="case-registration-option-wrapper flex flex-col gap-2.5 text-center text-text-col">
              <p className="into text-sm font-normal">
                तपाइलाई परेको समस्याको बिषयमा विवाद दिनुहोस् (वादी तर्फबाट )
              </p>
              <a
                href="/ujuri"
                className="btn btn-primary py-3 px-4 rounded-md bg-blue w-full text-white w-40 hover:shadow-md"
              >
                विवाद दर्ता गर्नुहोस्
              </a>
              <p className="separator my-3 font-bold text-xl">अथवा</p>
              <p className="info text-sm">
                तपाइलाई परेको विवादको बिषयमा लिखित जवाफ यहाँबाट पठाउनुहोस्
                (प्रतिवादी तर्फबाट )
              </p>
              <a
                href="/likhit-ujuri"
                className="btn btn-primary py-3 px-4 rounded-md bg-blue w-full text-white w-40 hover:shadow-md"
              >
                लिखित जवाफ पठाउनुहोस्{" "}
              </a>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

export default CaseRegistration;
