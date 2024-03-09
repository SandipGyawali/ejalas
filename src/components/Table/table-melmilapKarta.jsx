/* eslint-disable react/prop-types */
import EVD from "../Button/table-evd";

const style = "border border-border-col2 overflow-hidden px-2 py-2.5";
const headingStyle = {
  padding: "12px 15px",
  maxWidth: "200px",
  overflow: "hidden",
};

function TableMelMilapKarta({ tableData }) {
  return (
    <>
      {tableData.map((row, index) => (
        <tr
          className={`border border ${style} bg-table-bg ${index % 2 != 0 ? "bg-white" : ""}`}
          key={index}
        >
          <th className={`px-3 py-3.5 ${style}`} style={headingStyle}>
            {row.id}
          </th>
          <td className={`${style}`}>{row.melmilapKartaName}</td>
          <td className={`${style}`}>{row.wadaNo}</td>
          <td className={`${style}`}>{row.wadaName}</td>
          <td className={`${style}`}>
            <EVD href="#" btnType="edit" />
          </td>
          <td className={`${style}`}>
            <EVD href="#" btnType="delete" />
          </td>
        </tr>
      ))}
    </>
  );
}

export default TableMelMilapKarta;
