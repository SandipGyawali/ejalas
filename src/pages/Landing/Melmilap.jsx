import { useEffect, useState } from "react";
import axios from "axios";
import MelmilapProfile from "../../widgets/cards/MelmilapProfile";
import BreadCrumb from "../../components/BreadCrumb";

function Melmilap() {
  const [melmilapUsers, setMelmilapUsers] = useState([]);

  useEffect(() => {
    (async function () {
      const baseRes = await axios.get(
        "https://ijalas.kathmandu.gov.np/admin/melmilapkarta-darta/approve-or-reject/1",
      );

      setMelmilapUsers(baseRes.data);
    })();
  }, []);

  return (
    <div className="ujurio-awastha flex justify-center ">
      <div className="main-section-wrapper flex flex-col gap-10">
        <BreadCrumb text="मेलमिलाप" />
        <section className="profile-section bg-darkRed text-white text-xl rounded-lg flex flex-col m-auto gap-1.3 mt-2 w-11/12">
          <h2 className="profile-section-heading font-medium  p-4 text-center">
            मेलमिलापकर्ताको सूची
          </h2>
          <div className="profile-section-wrapper rounded-b-lg flex gap-12 flex-wrap justify-around bg-white py-12">
            {melmilapUsers
              ? melmilapUsers.map((data, index) => (
                  <MelmilapProfile key={index} profileData={data} />
                ))
              : ""}
          </div>
        </section>
        <section className="search-ujuri-section mb-10 w-11/12 m-auto">
          <div className="search-ujuri-wrapper bg-white3 rounded-lg pb-12">
            <form
              action="/melmilap-karta"
              method="get"
              className="flex flex-col gap-10 text-center"
            >
              <h1 className="common-main-heading text-2xl font-bold text-grey mt-8">
                मेलमिलापकर्ता छान्नुहोस्
              </h1>
              <div className="flex justify-center">
                <input
                  type="text"
                  className="form-control w-11/12 text-sm rounded py-1.5 px-4 border border-border-col rounded-md  focus:outline-none text-grey focus:shadow-md"
                  placeholder="मुद्दा नम्बर राख्नुहोस्"
                  name="caseId"
                />
              </div>

              <div className="button-wrapper">
                <button
                  className="common-case-btn py-2 px-4 rounded-md text-darkGrey bg-blue text-white w-40 hover:shadow-md"
                  id="case-search-btn"
                  type="submit"
                >
                  पेश गर्नुहोस्{" "}
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
// Melmilap.propTypes = {
//   profileData: propTypes.object.isRequired,
// };

export default Melmilap;
