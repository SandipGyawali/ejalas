/* eslint-disable react/prop-types */
import EVD from "../Button/table-evd";

const style = "border border-border-col2 overflow-hidden";
const headingStyle = {
  padding: "12px 15px",
  maxWidth: "200px",
  overflow: "hidden",
};

function Table({ tableHeading }) {
  return (
    <table
      className={`table w-full text-center text-text-col bg-white ${style} text-sm sm:text-md`}
      style={{ minWidth: "400px" }}
    >
      <thead className={`text-center border-b-2 border-border-col`}>
        <tr>
          {tableHeading.map(({ title }, index) => (
            <th className={`${style}`} style={headingStyle} key={index}>
              {title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="text-center">
        <tr className={`border border ${style} bg-table-bg`}>
          <th className={`px-3 py-3.5 ${style}`} style={headingStyle}>
            1
          </th>
          <td className={`w-1/2 px-2 py-2.5 ${style}`}>
            सरकारी, सार्वजनिक वा सामुदायिक बाहेक एकाको हकको जग्गा अर्काले चापी,
            मिची वा घुसाई खाएको,
          </td>
          <td className={`${style}`}>sdflsjdf</td>
          <td className={`${style}`}>
            {/* EVD is the edit view delete button component */}
            <EVD href="#" btnType="edit" />
          </td>
          <td className={`${style}`}>
            <EVD href="#" btnType="delete" />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
