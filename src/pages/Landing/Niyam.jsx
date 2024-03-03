import BreadCrumb from "../../components/BreadCrumb";
import { niyam } from "../../data/niyam";
import NiyamBtn from "../../widgets/cards/NiyamBtn";

function Niyam() {
  return (
    <div className="niyam-page">
      <div className="main-section">
        <div className="main-section-wrapper">
          <BreadCrumb head="गृहपृष्ठ" text="ऐन / नियम" />
          <section className="niyam-section flex justify-center mb-10">
            <div className="niyam-container bg-white3 h-fit pb-12 w-11/12 mt-10 rounded-xl flex flex-col gap-4 items-center">
              <h2 className="text-xl font-semibold text-text-col mt-8">
                ऐन / नियम
              </h2>
              <div className="niyam-wrapper mt-6 flex flex-col gap-7 w-11/12">
                {niyam.map((data, index) => (
                  <NiyamBtn key={index} niyamInd={data} />
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Niyam;
