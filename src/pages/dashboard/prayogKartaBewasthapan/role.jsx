import BreadCrumb from "@components/BreadCrumb";
import InputBox from "@widgets/cards/DashBoardInput/InputBox";
import InputBoxWrapper from "@widgets/cards/DashBoardInput/InputBoxWrapper";
import TableWrapper from "@components/Table/dashboard-table-wrapper";
import TableRole from "@components/Table/table-role";

const tableData = [
  {
    id: 1,
    role: "Engineer",
  },
  {
    id: 2,
    role: "Doctor",
  },
];

function Role() {
  return (
    <div>
      <section className="main-section mr-4">
        {/* navigational aid */}
        <BreadCrumb
          head="होम"
          text="प्रयोगकर्ता व्यवस्थापनप् / रयोगकर्ता"
          customStyle="mt-0 mx-0"
          href="hi"
        />
        {/* input box wrapper */}
        <InputBox
          inputHeading="प्रयोगकर्ताको भूमिका थप्नुहोस्"
          method="post"
          inputPlaceHolder="भूमिका"
          buttonName="थप्नुहोस्"
        />
        {/* table data */}
        <InputBoxWrapper inputHeading="भूमिकाको सूची">
          <TableWrapper
            tableHeading={[
              { title: "#" },
              { title: "भूमिका" },
              { title: "डिलिट गर्नुहोस्" },
            ]}
          >
            <TableRole tableData={tableData} />
          </TableWrapper>
        </InputBoxWrapper>
      </section>
    </div>
  );
}

export default Role;
