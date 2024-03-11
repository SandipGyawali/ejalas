import BreadCrumb from "@components/BreadCrumb";
import InputBoxWrapper from "@widgets/cards/DashBoardInput/InputBoxWrapper";
import TableWrapper from "@components/Table/dashboard-table-wrapper";
import TablePermission from "@components/Table/table-permission";

const tableData = [{ id: 1, prayogKartaName: "sdflsdf" }];

function PermissionManagement() {
  return (
    <div>
      <section className="main-section mr-4">
        {/* navigational aid */}
        <BreadCrumb
          head="होम"
          text="प्रयोगकर्ता व्यवस्थापनप् / रयोगकर्ता"
          customStyle="mt-0 mx-0"
          href="hi"
        />

        {/* input box wrapper */}
        <InputBoxWrapper inputHeading="प्रयोगकर्ताको अनुमति व्यवस्थापन">
          <form
            action=""
            className="flex flex-col gap-8 items-around mt-4 pb-4 mx-6"
          >
            <div className="input-wrapper flex flex-col sm:flex-row gap-4 flex-basis">
              <div className="input w-full sm:text-md txt-sm sm:w-1/2 lg:px-2 flex flex-col gap-2">
                <select
                  name="option"
                  id="label-selection"
                  className="form-control w-full text-text-col border border-border-col px-4 py-2 focus:outline-none rounded-md text-sm"
                >
                  <option selected disabled>
                    प्रयोगकर्ता रोज्नुहोस्
                  </option>
                  {["enabled", "disabled"].map((data, index) => (
                    <option value={data} key={index}>
                      {data.charAt(0).toUpperCase() + data.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              <div className="input w-full sm:text-md txt-sm sm:w-1/2 lg:px-2 flex flex-col gap-2">
                <select
                  name="option"
                  id="label-selection"
                  className="form-control w-full text-text-col border border-border-col px-4 py-2 focus:outline-none rounded-md text-sm"
                >
                  <option selected disabled>
                    मोड्युल रोज्नुहोस्
                  </option>
                  {["अदालत", "सिकायत", "समाचार"].map((data, index) => (
                    <option value={data} key={index} className="text-md">
                      {data.charAt(0).toUpperCase() + data.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              className="common-court-btn m-auto py-3 px-5 bg-blue2 rounded text-white text-sm font-semibold hover:bg-green2 max-w-fit"
              type="submit"
            >
              मोड्युल थप्नुहोस्
            </button>
          </form>
        </InputBoxWrapper>

        {/* permission management box wrapper */}
        <InputBoxWrapper inputHeading="प्रयोगकर्ताको अनुमति">
          <TableWrapper
            tableHeading={[
              { title: "#" },
              { title: "प्रयोगकर्ता नाम" },
              { title: "मेनु" },
              { title: "डिलिट गर्नुहोस" },
            ]}
          >
            <TablePermission tableData={tableData} />
          </TableWrapper>
        </InputBoxWrapper>
      </section>
    </div>
  );
}

export default PermissionManagement;
