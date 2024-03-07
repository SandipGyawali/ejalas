import BreadCrumb from "@components/BreadCrumb";
import InputBoxWrapper from "@widgets/cards/DashBoardInput/InputBoxWrapper";
import TableBoxWrapper from "@widgets/cards/Table/TableBoxWrapper";
import Table from "../../../components/Table/dashboard-table";
import { melmilapKarta } from "@data/tableHeading";

function MelmilapKarta() {
  return (
    <div>
      <section className="main-section mr-4">
        {/* navigational aid */}
        <BreadCrumb
          head="होम"
          text="मेलमिलापकर्ता व्यवस्थापन"
          customStyle="mt-0 mx-0"
          href="/admin/dashboard"
        />

        {/* input box wrapper */}
        <InputBoxWrapper inputHeading="मेलमिलापकर्ता थप्नुहोस्">
          <form
            action=""
            className="flex flex-col gap-8 items-around mt-4 mx-6"
            method=""
          >
            <div className="input-wrapper flex flex-col sm:flex-row gap-4">
              <div className="input w-full sm:text-md text-sm sm:w-1/2 lg:px-8 flex flex-col gap-2">
                <label>मेलमिलापकर्ताको पुरा नाम</label>
                <input
                  type="text"
                  id="courtName"
                  className="form-control w-full text-text-col border border-border-col px-4 py-2 focus:outline-none rounded-md text-sm"
                  name="complaintType"
                  placeholder="पूरा नाम"
                />
              </div>

              <div className="input w-full sm:w-1/2 lg:px-8 sm:text-md text-sm flex flex-col gap-2 ">
                <label>वडा नं</label>
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

        <TableBoxWrapper>
          <Table tableHeading={melmilapKarta} />
        </TableBoxWrapper>
      </section>
    </div>
  );
}

export default MelmilapKarta;
