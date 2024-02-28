import BreadCrumb from "../../components/BreadCrumb";

function HamroBarema() {
  return (
    <div className="hamro-barema-page">
      <div className="main-section">
        <div className="main-section-wrapper">
          <BreadCrumb text="हाम्रो बारेमा" />
          <section className="hamro-barema-section mt-6 mb-28">
            <div className="hamro-barema-container flex flex-col gap-2 items-center">
              <h2 className="text-blue font-extrabold text-2xl">
                हाम्रो बारेमा
              </h2>
              <div className="w-11/12 bg-black h-px mb-4"></div>
              <p className="font-thin">hamro barema</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default HamroBarema;
