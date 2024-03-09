import BreadCrumb from "@components/BreadCrumb";
import InputBoxWrapper from "@widgets/cards/DashBoardInput/InputBoxWrapper";
import { ward } from "@data/tableHeading";
import TableWrapper from "@components/Table/dashboard-table-wrapper";
import TableWard from "@components/Table/table-ward";

const tableData = [
  {
    id: 1,
    wada: "3",
    wadaName: "३",
  },
];

function Ward() {
  return (
    <div>
      <section className="main-section mr-4">
        <BreadCrumb
          head="होम"
          text="वडा"
          customStyle="mt-0 mx-0"
          href="/admin/dashboard"
        />

        <InputBoxWrapper inputHeading="वडा थप्नुहोस्">
          <form
            action=""
            className="flex flex-col gap-8 items-around mt-4 mx-6 pb-4"
            method=""
          >
            <div className="input-wrapper flex gap-4 flex-col sm:flex-row">
              <div className="input w-full sm:w-1/2 sm:text-md text-sm lg:px-8 flex flex-col gap-2">
                <label
                  style={{
                    fontSize: "15px",
                  }}
                >
                  वडाको नाम
                </label>
                <input
                  type="text"
                  id="courtName"
                  className="form-control w-full text-text-col border border-border-col px-4 py-2 focus:outline-none rounded-md text-sm"
                  name="complaintType"
                  placeholder="पूरा नाम"
                />
              </div>

              <div className="input w-full sm:w-1/2 sm:text-md text-sm lg:px-8 flex flex-col gap-2 ">
                <label
                  style={{
                    fontSize: "15px",
                  }}
                >
                  वडा नं
                </label>
                <input
                  type="text"
                  id="courtName"
                  className="form-control w-full text-text-col border border-border-col px-4 py-2 focus:outline-none rounded-md text-sm"
                  name="complaintType"
                  placeholder="वडा नं छान्नुहोस् "
                />
              </div>
            </div>

            <button
              className="common-court-btn m-auto py-3 px-5 bg-blue2 rounded text-white text-sm font-semibold hover:bg-green2 max-w-fit"
              type="submit"
            >
              थप्नुहोस्
            </button>
          </form>
        </InputBoxWrapper>

        <InputBoxWrapper inputHeading="विवादको प्रकारको सूची">
          <TableWrapper tableHeading={ward}>
            <TableWard tableData={tableData} />
          </TableWrapper>
        </InputBoxWrapper>
      </section>
    </div>
  );
}

export default Ward;
