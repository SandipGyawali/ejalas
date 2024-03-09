/* eslint-disable react/prop-types */

const style = "border border-border-col2";
const headingStyle = {
  padding: "12px 15px",
  maxWidth: "200px",
};

function TableWrapper({ tableHeading, children }) {
  return (
    <table
      className={`table w-full overflow-hidden text-center text-text-col bg-white ${style} text-sm sm:text-md`}
      style={{ minWidth: "500px" }}
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
      <tbody className="text-center">{children}</tbody>
    </table>
  );
}

export default TableWrapper;
