import BreadCrumb from "@components/BreadCrumb";
import InputBoxWrapper from "@widgets/cards/DashBoardInput/InputBoxWrapper";
import TableWrapper from "@components/Table/dashboard-table-wrapper";
import { user } from "@data/tableHeading";
import TableUser from "@components/Table/dashboard-user";

const tableData = [
  {
    id: 1,
    prayogKartaName: "प्रयोगकर्ता नाम",
    email: "test@gmail.com",
    fullName: "test",
    enabled: "Enabled",
    prayogKartaRole: "user-this0test",
  },
];

function User() {
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
        {/* input box wrapper*/}
        <InputBoxWrapper inputHeading="प्रयोगकर्ता थप्नुहोस्">
          <form
            action=""
            className="flex flex-col gap-8 items-around mt-4 pb-4 mx-6"
            method=""
          >
            <div className="input-wrapper flex flex-col sm:flex-row gap-4 flex-basis">
              <div className="input w-full sm:text-md txt-sm sm:w-1/2 lg:px-2 flex flex-col gap-2">
                <label>प्रयोगकर्ता नाम</label>
                <input
                  type="text"
                  id="courtName"
                  className="form-control w-full text-text-col border border-border-col px-4 py-2 focus:outline-none rounded-md text-sm"
                  name="complaintType"
                  placeholder="पूरा नाम"
                />
              </div>

              <div className="input w-full sm:text-md txt-sm sm:w-1/2 lg:px-2 flex flex-col gap-2">
                <label>ईमेल</label>
                <input
                  type="email"
                  id="email"
                  className="form-control w-full text-text-col border border-border-col px-4 py-2 focus:outline-none rounded-md text-sm"
                  name="complaintType"
                  placeholder="ईमेल"
                />
              </div>

              <div className="input w-full sm:text-md txt-sm sm:w-1/2 lg:px-2 flex flex-col gap-2">
                <label>पूरा नाम</label>
                <input
                  type="text"
                  id="fullName"
                  className="form-control w-full text-text-col border border-border-col px-4 py-2 focus:outline-none rounded-md text-sm"
                  name="fullName"
                  placeholder="पूरा नाम"
                />
              </div>

              <div className="input w-full sm:text-md txt-sm sm:w-1/2 lg:px-2 flex flex-col gap-2">
                <label>पासवर्ड</label>
                <input
                  type="password"
                  id="password"
                  className="form-control w-full text-text-col border border-border-col px-4 py-2 focus:outline-none rounded-md text-sm"
                  name="password"
                  placeholder="पासवर्ड"
                />
              </div>
            </div>

            <div className="input-wrapper flex flex-col sm:flex-row gap-4 flex-basis">
              <div className="input w-full sm:text-md txt-sm sm:w-1/2 lg:px-2 flex flex-col gap-2">
                <label>प्रयोगकर्ताको भूमिका</label>
                <input
                  type="text"
                  id="paryog-karta"
                  className="form-control w-full text-text-col border border-border-col px-4 py-2 focus:outline-none rounded-md text-sm"
                  name="prayog-karta"
                  placeholder="प्रयोगकर्ताको भूमिका"
                />
              </div>

              <div className="input w-full sm:text-md txt-sm sm:w-1/2 lg:px-2 flex flex-col gap-2">
                <label>Enabled</label>
                <select
                  name="option"
                  id="label-selection"
                  className="form-control w-full text-text-col border border-border-col px-4 py-2 focus:outline-none rounded-md text-sm"
                >
                  {["enabled", "disabled"].map((data, index) => (
                    <option value={data} key={index}>
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

        <InputBoxWrapper inputHeading="प्रयोगकर्ताको सूची">
          <TableWrapper tableHeading={user}>
            <TableUser tableData={tableData} />
          </TableWrapper>
        </InputBoxWrapper>
      </section>
    </div>
  );
}

export default User;
