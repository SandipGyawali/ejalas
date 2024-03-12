import BreadCrumb from "@components/BreadCrumb";
import InputBox from "@widgets/cards/DashBoardInput/InputBox";
import InputBoxWrapper from "@widgets/cards/DashBoardInput/InputBoxWrapper";
import TableWrapper from "@components/Table/dashboard-table-wrapper";
import TableComplaintRules from "@components/Table/table-complaint-rule";

const tableData = [
  {
    id: 1,
    issueType:
      "सरकारी, सार्वजनिक वा सामुदायिक बाहेक एकाको हकको जग्गा अर्काले चापी, मिची वा घुसाई खाएको,",
  },
];

function ComplaintRelatedIssue() {
  return (
    <div>
      <section className="main-section mr-4">
        <BreadCrumb
          head="होम"
          text="विवादको नियम र दफा"
          customStyle="mt-0 mx-0"
        />

        <InputBox
          method="post"
          action="/admin"
          inputPlaceHolder="विवादको प्रकार छान्नुहोस"
          inputHeading="विवादको प्रकार छान्नुहोस"
          buttonName="विवादको प्रकार छान्नुहोस"
        />

        <InputBoxWrapper inputHeading="विवादको नियम र दफाको सूची">
          <TableWrapper
            tableHeading={[
              { title: "#" },
              { title: "विवादको प्रकार" },
              { title: "नियम र दफा हेर्नुहोस" },
              { title: "सम्पादन गर्नुहोस्" },
              { title: "डिलिट गर्नुहोस्" },
            ]}
          >
            <TableComplaintRules tableData={tableData} />
          </TableWrapper>
        </InputBoxWrapper>
      </section>
    </div>
  );
}

export default ComplaintRelatedIssue;
