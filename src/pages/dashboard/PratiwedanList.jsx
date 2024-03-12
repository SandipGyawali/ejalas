import BreadCrumb from "@components/BreadCrumb";
import InputBoxWrapper from "@widgets/cards/DashBoardInput/InputBoxWrapper";
import TableWrapper from "@components/Table/dashboard-table-wrapper";
import TablePratiwedan from "@components/Table/table-pratiwedanList";

const tableData = [{ id: 1, pratiwedanName: "वडागत केसको स्थिति प्रतिवेदन" }];

function PratiwedanList() {
  return (
    <div>
      <section className="main-section mr-4">
        <BreadCrumb head="होम" text=" प्रतिवेदनहरु" customStyle="mt-0 mx-0" />

        <InputBoxWrapper inputHeading="प्रतिवेदनहरूको सूची">
          <TableWrapper
            tableHeading={[
              { title: "#" },
              { title: "प्रतिवेदनको नाम" },
              { title: "हेर्नुहोस" },
            ]}
          >
            <TablePratiwedan tableData={tableData} />
          </TableWrapper>
        </InputBoxWrapper>
      </section>
    </div>
  );
}

export default PratiwedanList;
