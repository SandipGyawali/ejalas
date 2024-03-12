import BreadCrumb from "@components/BreadCrumb";
import InputBoxWrapper from "@widgets/cards/DashBoardInput/InputBoxWrapper";
import TableWrapper from "@components/Table/dashboard-table-wrapper";
import TableCourt from "@components/Table/table-court";

function Court() {
  return (
    <div>
      <section className="main-section mr-4">
        <BreadCrumb
          head="होम"
          text="न्यायिक समिति"
          customStyle="mt-0 mx-0"
          href="/admin/dashboard"
        />

        <InputBoxWrapper inputHeading="न्यायिक समिति थप्नुहोस्">
          <form
            action=""
            className="flex flex-col gap-8 items-around mt-4 pb-4 mx-6"
            method=""
          >
            <div className="input-wrapper flex flex-col sm:flex-row gap-4">
              <div className="input w-full sm:w-1/2 lg:px-8 sm:text-md text-sm flex flex-col gap-2 ">
                <label>न्यायिक समितिको नाम</label>
                <input
                  type="text"
                  id="nayakSamiti"
                  className="form-control w-full text-text-col border border-border-col px-4 py-2 focus:outline-none rounded-md text-sm"
                  name="nayakSamiti"
                  placeholder="न्यायिक समितिको"
                />
              </div>

              <div className="input w-full sm:w-1/2 lg:px-8 sm:text-md text-sm flex flex-col gap-2 ">
                <label>प्रदेश</label>
                <select
                  name="option"
                  id="label-selection"
                  className="form-control w-full text-text-col border border-border-col px-4 py-2 focus:outline-none rounded-md text-sm"
                >
                  <option selected disabled>
                    मोड्युल रोज्नुहोस्
                  </option>
                  {["बागमती प्रदेश"].map((data, index) => (
                    <option value={data} key={index} className="text-md">
                      {data.charAt(0).toUpperCase() + data.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              <div className="input w-full sm:w-1/2 lg:px-8 sm:text-md text-sm flex flex-col gap-2 ">
                <label>जिल्ला</label>
                <select
                  name="option"
                  id="label-selection"
                  className="form-control w-full text-text-col border border-border-col px-4 py-2 focus:outline-none rounded-md text-sm"
                >
                  <option selected disabled>
                    मोड्युल रोज्नुहोस्
                  </option>
                  {["बागमती प्रदेश"].map((data, index) => (
                    <option value={data} key={index} className="text-md">
                      {data.charAt(0).toUpperCase() + data.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              <div className="input w-full sm:w-1/2 lg:px-8 sm:text-md text-sm flex flex-col gap-2 ">
                <label>न्यायिक समितिको प्रकार</label>
                <select
                  name="option"
                  id="label-selection"
                  className="form-control w-full text-text-col border border-border-col px-4 py-2 focus:outline-none rounded-md text-sm"
                >
                  <option selected disabled>
                    मोड्युल रोज्नुहोस्
                  </option>
                  {[
                    "demo edit sf",
                    "न्यायिक समितिको इजलास sdf",
                    "प्रमुख प्रशासकीय अधिकृतको इजलास",
                  ].map((data, index) => (
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
              थप्नुहोस्
            </button>
          </form>
        </InputBoxWrapper>

        <InputBoxWrapper inputHeading="न्यायिक समितिको सूची">
          <TableWrapper
            tableHeading={[
              { title: "#" },
              { title: "	नाम" },
              { title: "प्रदेश" },
              { title: "जिल्ला" },
              { title: "प्रकार" },
              { title: "सम्पादन गर्नुहोस्" },
              { title: "डिलिट गर्नुहोस्" },
            ]}
          >
            <TableCourt
              tableData={[
                {
                  id: 1,
                  name: "sdf",
                  province: "बागमती प्रदेश",
                  district: "जिल्ला",
                  type: "धिकृतको इजलास",
                },
              ]}
            />
          </TableWrapper>
        </InputBoxWrapper>
      </section>
    </div>
  );
}

export default Court;
