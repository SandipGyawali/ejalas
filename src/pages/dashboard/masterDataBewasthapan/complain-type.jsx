import BreadCrumb from "@components/BreadCrumb";
import InputBox from "@widgets/cards/DashBoardInput/InputBox";
import { complainType } from "@data/tableHeading";
import InputBoxWrapper from "@widgets/cards/DashBoardInput/InputBoxWrapper";
import TableWrapper from "@components/Table/dashboard-table-wrapper";
import TableComplainType from "@components/Table/table-complain-type";

const tableData = [
  {
    id: 1,
    issueType:
      "सरकारी, सार्वजनिक वा सामुदायिक बाहेक एकाको हकको जग्गा अर्काले चापी, मिची वा घुसाई खाएको,",
  },
];

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

        <InputBoxWrapper inputHeading="विवादको प्रकारको सूची">
          <TableWrapper tableHeading={complainType}>
            <TableComplainType tableData={tableData} />
          </TableWrapper>
        </InputBoxWrapper>
      </section>
    </div>
  );
}

export default ComplainType;
