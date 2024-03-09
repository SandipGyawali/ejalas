import BreadCrumb from "@components/BreadCrumb";
import InputBox from "@widgets/cards/DashBoardInput/InputBox";
import { department } from "@data/tableHeading";
import InputBoxWrapper from "@widgets/cards/DashBoardInput/InputBoxWrapper";
import TableWrapper from "@components/Table/dashboard-table-wrapper";
import TableDepartment from "@components/Table/table-department";

const tableData = [
  {
    id: 1,
    department: "नगर प्रमुखज्यूको सचिवालय",
  },
];

function Department() {
  return (
    <div>
      <section className="main-section mr-4">
        <BreadCrumb
          head="होम"
          text="मास्टर डाटा व्यवस्थापन / विभाग"
          customStyle="mx-0 my-0"
        />

        {/* input box department */}
        <InputBox
          method="get"
          action="hi"
          inputPlaceHolder="विभागको नाम"
          inputHeading="विभाग थप्नुहोस्"
          buttonName="थप्नुहोस्"
        />

        <InputBoxWrapper inputHeading="विवादको प्रकारको सूची">
          <TableWrapper tableHeading={department}>
            <TableDepartment tableData={tableData} />
          </TableWrapper>
        </InputBoxWrapper>
      </section>
    </div>
  );
}

export default Department;
