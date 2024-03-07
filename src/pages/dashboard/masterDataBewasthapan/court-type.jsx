import BreadCrumb from "@components/BreadCrumb";
import InputBox from "@widgets/cards/DashBoardInput/InputBox";
import TableBoxWrapper from "@widgets/cards/Table/TableBoxWrapper";
import Table from "@components/Table/dashboard-table";
import { courtType } from "@data/tableHeading";

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

        {/* table court-type */}
        <TableBoxWrapper>
          <Table tableHeading={courtType} />
        </TableBoxWrapper>
      </section>
    </div>
  );
}

export default CourtType;
