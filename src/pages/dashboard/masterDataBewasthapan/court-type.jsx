import BreadCrumb from "@components/BreadCrumb";
import InputBox from "@widgets/cards/DashBoardInput/InputBox";
import { courtType } from "@data/tableHeading";
import TableWrapper from "@components/Table/dashboard-table-wrapper";
import InputBoxWrapper from "@widgets/cards/DashBoardInput/InputBoxWrapper";
import TableCourtType from "@components/Table/table-court-type";

const tableData = [{ id: 1, nayakSamitiType: "demo edit sf" }];

function CourtType() {
  return (
    <div>
      <section className="main-section mr-4">
        {/* navigational aid */}
        <BreadCrumb
          head="होम"
          text="मास्टर डाटा व्यवस्थापन / न्यायिक समितिको प्रकार"
          customStyle="mt-0 mx-0"
          href="/admin/dashboard"
        />

        {/* input box single input form */}
        <InputBox
          method="post"
          action="/admin/hi"
          inputPlaceHolder="न्यायिक समितिको प्रकार"
          inputHeading="न्यायिक समितिको प्रकार थप्नुहोस्"
          buttonName="थप्नुहोस्"
        />

        <InputBoxWrapper inputHeading="विवादको प्रकारको सूची">
          <TableWrapper tableHeading={courtType}>
            <TableCourtType tableData={tableData} />
          </TableWrapper>
        </InputBoxWrapper>
      </section>
    </div>
  );
}

export default CourtType;
