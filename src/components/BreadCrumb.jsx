/* eslint-disable react/prop-types */
function BreadCrumb({ text }) {
  return (
    <section
      className="bread-crumb-section w-11/12 mt-5 text-text-col flex m-auto"
      style={{ fontSize: "15px" }}
    >
      <ul className="bread-crumb flex gap-1">
        <li>
          <a href="/index" className="text-blue">
            गृहपृष्ठ
          </a>
        </li>
        <span>/</span>
        <li>
          <span>{text}</span>
        </li>
      </ul>
    </section>
  );
}

export default BreadCrumb;
