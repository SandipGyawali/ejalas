/* eslint-disable react/prop-types */
import EVD from "../Button/table-evd";

const style = "border border-border-col2 overflow-hidden px-2 py-2.5";

function TableLikhitUjuri({ tableData }) {
  return (
    <>
      {tableData.map((row, index) => (
        <tr
          className={`border border ${style} bg-table-bg ${index % 2 != 0 ? "bg-white" : ""}`}
          key={index}
        >
          <td className={`${style}`}>{row.issueNo}</td>
          <td className={`${style}`}>{row.caseNo}</td>
          <td className={`${style}`}>
            <EVD href="#" btnType="view" />
          </td>
          <td className={`${style}`}>
            <EVD href="#" btnType="delete" />
          </td>
        </tr>
      ))}
    </>
  );
}

export default TableLikhitUjuri;
