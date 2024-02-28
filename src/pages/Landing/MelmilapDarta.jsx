import BreadCrumb from "../../components/BreadCrumb";
import { melmilapKarta } from "../../data/melmilapkarta";
import MelmilapDartaInput from "../../widgets/cards/MelmilapDartaInput";

function MelmilapDarta() {
  return (
    <div className="ujuriko-awastha-page">
      <div className="main-section">
        <div className="main-section-wrapper flex flex-col">
          <BreadCrumb text="मेलमिलापकर्ता दर्ता" />
          <section className="melmilapkarta-darta-section">
            <div className="melmilapkarta-darta-wrapper common-section-wrapper flex justify-center mt-10 mb-10">
              <form
                action="/melmilapkarta-darta"
                method="post"
                encType="multipart/form-data"
                className="w-11/12 bg-white3 rounded-xl pb-10 px-2"
              >
                <h1 className="common-main-heading text-center bg-white3 rounded-xl text-2xl font-semibold text-text-col pt-8 pb-4 focus:border-blue">
                  मेलमिलापकर्ता दर्ता गर्नुहोस्
                </h1>
                <div className="row-container label-wrapper w-full flex flex-wrap">
                  {melmilapKarta.map((data, index) => (
                    <MelmilapDartaInput melmilapInput={data} key={index} />
                  ))}
                </div>

                <div className="m-auto mt-6 pb-10">
                  <button
                    type="submit"
                    className="common-case-btn py-2 px-4 mx-4 rounded-md text-darkGrey bg-blue text-white w-40 hover:shadow-md"
                    id="case-search-btn"
                  >
                    पेश गर्नुहोस्
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
export default MelmilapDarta;
