/* eslint-disable react/prop-types */
import propTypes from "prop-types";

function NiyamBtn({ niyamInd }) {
  return (
    <div className="row flex flex-col gap-6 justify-between md:flex-row">
      {niyamInd.map((data, index) => (
        <div
          key={index}
          className="text-center flex items-center justify-center h-fit bg-blue text-white px-4 py-4 w-full rounded-lg md:w-1/2"
        >
          <a className="btn btn-primary" href={data.url}>
            {data.text}
          </a>
        </div>
      ))}
    </div>
  );
}

NiyamBtn.propTypes = {
  niyamInd: propTypes.array.isRequired,
};

export default NiyamBtn;
