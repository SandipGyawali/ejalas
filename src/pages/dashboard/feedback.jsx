import BreadCrumb from "@components/BreadCrumb";
import InputBoxWrapper from "@widgets/cards/DashBoardInput/InputBoxWrapper";
import TableWrapper from "@components/Table/dashboard-table-wrapper";
import TableFeedBack from "@components/Table/table-feedbar";

const tableData = [
  {
    id: 1,
    name: "सुनिल श्रेष्ठ",
    email: "sunilshrestha49@gmail.com",
    subject: "फोहर व्यवस्थापन",
    wada: "1",
    department: "नगर प्रमुखज्यूको सचिवालय",
    type: "गुनासो",
    message: "यक महिना देखि फोहर उ...",
  },
];

function FeedBack() {
  return (
    <div>
      <section className="main-section mr-4">
        {/* navigational aid */}
        <BreadCrumb
          head="होम"
          text="गुनासो"
          customStyle="mt-0 mx-0"
          href="/admin/dashboard"
        />

        <InputBoxWrapper inputHeading="गुनासोको सूची">
          <TableWrapper
            tableHeading={[
              { title: "#" },
              { title: "नाम" },
              { title: "इमेल" },
              { title: "विषय" },
              { title: "वडा" },
              { title: "विभाग" },
              { title: "प्रकार" },
              { title: "सन्देश" },
            ]}
          >
            <TableFeedBack tableData={tableData} />
          </TableWrapper>
        </InputBoxWrapper>
      </section>
    </div>
  );
}

export default FeedBack;
