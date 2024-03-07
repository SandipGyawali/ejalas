import BreadCrumb from "@components/BreadCrumb";
import InputBox from "@widgets/cards/DashBoardInput/InputBox";
import TableBoxWrapper from "@widgets/cards/Table/TableBoxWrapper";
import Table from "@components/Table/dashboard-table";
import { department } from "@data/tableHeading";

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

        {/* table department */}
        <TableBoxWrapper>
          <Table tableHeading={department} />
        </TableBoxWrapper>
      </section>
    </div>
  );
}

export default Department;
