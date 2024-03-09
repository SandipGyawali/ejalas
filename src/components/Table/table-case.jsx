/* eslint-disable react/prop-types */
import EVD from "../Button/table-evd";

const style = "border border-border-col2 overflow-hidden px-2 py-2.5";
const headingStyle = {
  padding: "12px 15px",
  maxWidth: "200px",
  overflow: "hidden",
};

function CaseTable({ tableData }) {
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
          <td className={`${style}`}>{row.caseNo}</td>
          <td className={`${style}`}>{row.issueType}</td>
          <td className={`${style}`}>{row.pratiwadi}</td>
          <td className={`${style}`}>{row.dartaMiti}</td>
          <td className={`${style}`}>
            <EVD href="#" btnType="edit" />
          </td>
        </tr>
      ))}
    </>
  );
}

export default CaseTable;
