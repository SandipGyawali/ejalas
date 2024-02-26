/* eslint-disable react/prop-types */
import propTypes from "prop-types";

function Marquee({ newsData, newsHead }) {
  return (
    <div className="bg-green bg-darkBlue flex justify-center pr-2">
      <div className="flex items-center overflow-x-hidden text-white w-11/12">
        <h2 className="whitespace-nowrap font-bold">सूचना </h2>
        <span className="ml-4">|</span>
        <div className="flex overflow-hidden font-w500 py-4 text-sm">
          {newsHead
            ? newsHead.map((head, i) => (
                <ul
                  key={i}
                  className="flex gap-4 animate-marquee whitespace-nowrap"
                >
                  <li className="">{head}</li>
                  {newsData
                    ? newsData[i].map((data, index) => (
                        <li key={index} className="gap-2">
                          {data}
                        </li>
                      ))
                    : ""}
                </ul>
              ))
            : ""}
        </div>
      </div>
    </div>
  );
}

Marquee.propTypes = {
  newsHead: propTypes.array.isRequired,
  newsData: propTypes.array.isRequired,
};

export default Marquee;
