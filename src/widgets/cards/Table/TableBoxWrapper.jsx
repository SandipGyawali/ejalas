/* eslint-disable react/prop-types */
function TableBoxWrapper({ children }) {
  return (
    <div className="courts-section common-main-section mt-7">
      <h3 className="bg-blue2 text-white py-3.5 font-semibold text-center rounded-t-md">
        विवादको प्रकारको सूची
      </h3>
      <div className="main-content overflow-x-auto ">{children}</div>
    </div>
  );
}

export default TableBoxWrapper;
