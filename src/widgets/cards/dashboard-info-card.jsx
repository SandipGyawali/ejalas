/* eslint-disable react/prop-types */
import { Icon } from "@iconify/react";

function InfoCard({ data }) {
  return (
    <div
      className={`number-of-cases-item h-28 md:max-w-96 min-w-52 max-w-full  text-white flex items-center gap-5 basis-[18rem] grow`}
      style={{
        backgroundColor: `${data.color}`,
      }}
    >
      <div className="left-content text-4xl py-4 px-6 h-full flex flex-wrap items-center bg-black bg-opacity-20">
        <Icon icon={data.icon} />
      </div>
      <div className="right-content">
        <h2 className="font-semibold">{data.text}</h2>
        <span className="text-2xl font-bold">{data.num}</span>
      </div>
    </div>
  );
}

export default InfoCard;
