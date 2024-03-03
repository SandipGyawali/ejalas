import BreadCrumb from "../../components/BreadCrumb";

function Tarekh() {
  return (
    <div id="ujuriko-awastha-page">
      <div className="main-section">
        <div className="main-section-wrapper">
          <BreadCrumb head="गृहपृष्ठ" text="मेलमिलापकर्ता दर्ता" />
          <section className="search-ujuri-section flex justify-center mt-10 mb-10">
            <div className="search-ujuri-wrapper w-11/12 flex justify-center bg-white3 rounded-xl">
              <form
                action="/tarikh/view"
                method="post"
                className="flex flex-col w-11/12 items-center gap-10 mb-12"
              >
                <h1 className="common-main-heading text-2xl font-semibold text-grey mt-8">
                  तारेख लिनुहोस्
                </h1>
                <input
                  type="text"
                  className="form-control text-sm w-11/12 xl:w-8/12 rounded py-2 px-4 border border-border-col rounded-md  focus:outline-none text-grey focus:shadow-md"
                  placeholder="मुद्दा नम्बर राख्नुहोस्"
                  name="caseId"
                />
                <button
                  type="submit"
                  className="common-case-btn py-2 px-4 rounded-md text-darkGrey bg-blue text-white w-40 hover:shadow-md"
                  id="case-search-btn"
                >
                  पेश गर्नुहोस्
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Tarekh;
