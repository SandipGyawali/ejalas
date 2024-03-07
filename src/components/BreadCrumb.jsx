/* eslint-disable react/prop-types */
function BreadCrumb({ head, text, customStyle = "mt-5", href = "/index" }) {
  return (
    <section
      className={`bread-crumb-section w-11/12 text-text-col flex m-auto ${customStyle}`}
      style={{ fontSize: "15px" }}
    >
      <ul className="bread-crumb flex gap-1">
        <li>
          <a href={href} className="text-blue">
            {head}
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
