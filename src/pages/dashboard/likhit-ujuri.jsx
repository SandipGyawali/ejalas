import BreadCrumb from "@components/BreadCrumb";
import InputBoxWrapper from "@widgets/cards/DashBoardInput/InputBoxWrapper";
import TableWrapper from "@components/Table/dashboard-table-wrapper";
import TableLikhitUjuri from "@components/Table/table-likhit";

function LikhitUjuri() {
  return (
    <div>
      <section className="main-section mr-4">
        <BreadCrumb
          head="होम"
          text="लिखित"
          customStyle="mt-0 mx-0"
          href="/admin/dashboard"
        />

        <InputBoxWrapper inputHeading="सूचनाको सूची">
          <TableWrapper
            tableHeading={[
              { title: "विवाद नं" },
              { title: "केस नं" },
              { title: "हेर्नुहोस्" },
              { title: "डिलिट गर्नुहोस्" },
            ]}
          >
            <TableLikhitUjuri
              tableData={[{ caseNo: 124, issueNo: "209-jc-2" }]}
            />
          </TableWrapper>
        </InputBoxWrapper>
      </section>
    </div>
  );
}

export default LikhitUjuri;
