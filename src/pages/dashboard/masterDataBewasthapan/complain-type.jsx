import BreadCrumb from "@components/BreadCrumb";
import Table from "@components/Table/dashboard-table";
import InputBox from "@widgets/cards/DashBoardInput/InputBox";
import TableBoxWrapper from "@widgets/cards/Table/TableBoxWrapper";
import { complainType } from "../../../data/tableHeading";

function ComplainType() {
  return (
    <div>
      <section className="main-section mr-4">
        {/*  navigational aid that helps in keeping track*/}
        <BreadCrumb
          head="होम"
          text="मास्टर डाटा व्यवस्थापन / विवादको प्रकार"
          customStyle="mt-0 mx-0"
          href="/admin/dashboard"
        />

        {/* input box for the single input form */}
        <InputBox
          method="post"
          action="/admin/complaint-type"
          inputPlaceHolder="विवादको प्रकार"
          inputHeading="विवादको प्रकार थप्नुहोस्"
          buttonName="थप्नुहोस्"
        />

        {/* contains the outer */}
        <TableBoxWrapper>
          <Table tableHeading={complainType} />
        </TableBoxWrapper>
      </section>
    </div>
  );
}

export default ComplainType;
