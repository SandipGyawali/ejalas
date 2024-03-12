import BreadCrumb from "@components/BreadCrumb";
import InputBoxWrapper from "@widgets/cards/DashBoardInput/InputBoxWrapper";
import TableWrapper from "@components/Table/dashboard-table-wrapper";
import TableMelMilapKartaDarta from "@components/Table/table-melmilapkarta-darta";

const tableData = [
  {
    id: 1,
    name: "Hari shrestha",
    wada: "3",
    mobile: "987534725",
    email: "abc@gmail.com",
    location: "tokha",
  },
];

function MelmilapKartaDarta() {
  return (
    <div>
      <section className="main-section mr-4">
        {/* navigational aid that helps in keeping track */}
        <BreadCrumb
          head="होम"
          text="मेलमिलापकर्ता दर्ता"
          customStyle="mt-0 mx-0"
          href="/admin/dashboard"
        />
        {/* table list */}
        <InputBoxWrapper inputHeading="मेलमिलापकर्ता दर्ताको सूची">
          <TableWrapper
            tableHeading={[
              { title: "#" },
              { title: "नाम" },
              { title: "वडा" },
              { title: "मोबाईल नं" },
              { title: "ईमेल" },
              { title: "ठेगाना" },
              { title: "स्थिति" },
              { title: "कार्य" },
            ]}
          >
            <TableMelMilapKartaDarta tableData={tableData} />
          </TableWrapper>
        </InputBoxWrapper>
      </section>
    </div>
  );
}

export default MelmilapKartaDarta;
