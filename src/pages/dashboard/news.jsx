import BreadCrumb from "@components/BreadCrumb";
import InputBoxWrapper from "@widgets/cards/DashBoardInput/InputBoxWrapper";
import TableWrapper from "@components/Table/dashboard-table-wrapper";
import InputBox from "@widgets/cards/DashBoardInput/InputBox";
import TableNews from "../../components/Table/table-news";

const tableData = [
  { id: 1, notice: "(च) जेष्ठ नागरिकको पालनपोषण तथा हेरचाह नगरेको" },
];

function News() {
  return (
    <div>
      <section className="main-section mr-4">
        <BreadCrumb
          head="होम"
          text="सूचना"
          customStyle="mt-0 mx-0"
          href="/admin/dashboard"
        />
        <InputBox
          method="post"
          action="/admin/complaint-type"
          inputPlaceHolder="सूचना"
          buttonName="थप्नुहोस्"
          inputHeading="सूचना थप्नुहोस्"
        />

        <InputBoxWrapper inputHeading="सूचनाको सूची">
          <TableWrapper
            tableHeading={[
              { title: "#" },
              { title: "सूचना" },
              { title: "सम्पादन गर्नुहोस्" },
              { title: "डिलिट गर्नुहोस्" },
            ]}
          >
            <TableNews tableData={tableData} />
          </TableWrapper>
        </InputBoxWrapper>
      </section>
    </div>
  );
}

export default News;
